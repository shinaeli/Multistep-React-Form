import { createContext, useEffect, useState } from "react";

export const FormContext = createContext();

export const FormContextProvider = ({ children }) => {
    const [data, setData] = useState({
        billFirstName: "",
        billLastName: "",
        billAddress1: "",
        billCity: "",
        billState: "",
        billZipCode: "",
        shipFirstName: "",
        shipLastName: "",
        shipAddress1: "",
        shipCity: "",
        shipState: "",
        shipZipCode: "",
        optIn: false
    });

    const [page, setPage] = useState(0);
    const [showNext, setShowNext] = useState();

    const handlePrev = () => {
        if(page <= 0) {
            setPage(0);
        } else {
            setPage(prev => prev - 1);
        }
        console.log(page);
    };

    const handleNext = () => {
        if(page >= 2) {
            setPage(2);
        } else {
            setPage(prev => prev + 1);
        }
        console.log(page);
    };

    const checkArray = arr => arr.includes("") === false;

    // Hide 'Next' button once a page renders
    useEffect(() => {
        setShowNext(false);
    }, [page]);

    useEffect(() => {
        if(page === 0 && checkArray(Object.keys(data).filter(key => key.startsWith('bill')).map(item => data[item]))) {
            setShowNext(true);
        } else if (page === 1 && checkArray(Object.keys(data).filter(key => key.startsWith('ship')).map(item => data[item]))) {
            setShowNext(true);
        }
    }, [data]);

    
    // const canNext = (((page === 0) && (checkArray(Object.keys(data).filter(key => key.startsWith('bill')).map(item => data[item]))))) || (((page === 1) && (checkArray(Object.keys(data).filter(key => key.startsWith('ship')).map(item => data[item])))));
    
    return (
        <FormContext.Provider value={{data, setData, page, setPage, handleNext, handlePrev, showNext}}>
            {children}
        </FormContext.Provider>
    )
}