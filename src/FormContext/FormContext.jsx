import { createContext, useEffect, useState } from "react";

export const FormContext = createContext();

export const FormContextProvider = ({ children }) => {
    // Create a state 'sameShipping' to control the 'Same as Billing Address' checkbox
    const [sameShipping, setSameShipping] = useState(false);

    // Create an object 'data' stored in a state to control each user data 
    const [data, setData] = useState({
        billFirstName: "",
        billLastName: "",
        billAddress1: "",
        billCity: "",
        billState: "",
        billZipCode: "",
        isSameShipping: sameShipping,
        shipFirstName: "",
        shipLastName: "",
        shipAddress1: "",
        shipCity: "",
        shipState: "",
        shipZipCode: "",
        optIn: false
    });


    // Create a state 'page' to control the page number and index
    const [page, setPage] = useState(0);
    // Create a state to conrtol the display of the 'Next' button 
    const [showNext, setShowNext] = useState(false);

    const handlePrev = () => {
        if(page <= 0) {
            setPage(0);
        } else {
            setPage(prev => prev - 1);
        }
        // console.log(page);
    };

    const handleNext = () => {
        if(page >= 2) {
            setPage(2);
        } else {
            setPage(prev => prev + 1);
        }
        // console.log(page);
    };

    // This function checks if there is no empty input field.
    const checkArray = arr => arr.includes("") === false;

    // Hide 'Next' button once a page renders
    useEffect(() => {
        setShowNext(false);
    }, [page]);

    // The function in the useEffect runs if there's a change in any input field i.e. the 'data' object
    useEffect(() => {
        // If page is zero and every 'data' property that starts with 'bill' is not empty
        if(page === 0 && checkArray(Object.keys(data).filter(key => key.startsWith('bill')).map(item => data[item]))) {
            // If true, set 'sameShipping' to true
            setShowNext(true);
            // If page is one and every 'data' property that starts with 'ship' is not empty
        } else if (page === 1 && checkArray(Object.keys(data).filter(key => key.startsWith('ship')).map(item => data[item]))) {
            // If true, set 'sameShipping' to true
            setShowNext(true);
        }
    }, [data]);

    
    return (
        <FormContext.Provider value={{data, setData, page, setPage, handleNext, handlePrev, showNext, sameShipping, setSameShipping}}>
            {children}
        </FormContext.Provider>
    )
}