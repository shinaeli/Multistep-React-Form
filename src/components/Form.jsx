import { useContext } from "react";
import FormInputs from "./FormInputs"
import { FormContext } from "../FormContext/FormContext";

const Form = () => {
    // Import variables and functions using the 'useContext' hook
    const {data, setData, page, setPage, handlePrev, handleNext, showNext} = useContext(FormContext);

    const title = {
        0: 'Billing Details',
        1: 'Shipping Details',
        2: 'Optin',
    };

    console.log(showNext);

    const handleSubmit = e => {
        e.preventDefault();
        console.log(data);
        setData(
            {
                ...data,
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
            }
        );
        setPage(0);
    }

    const content = (
        <form onSubmit={handleSubmit}>

            <header className="flex-header w-[90%] mx-auto mb-[15px]">
                <h2 className="text-white">{title[page]}</h2>

                <div className="flex-header w-[35%]">

                    <button className="button" onClick={handlePrev} type="button">Prev</button>

                    <button onClick={handleNext} className={showNext ? 'button' : 'hidden'} type="button">Next</button>

                    <button onClick={handleSubmit} className={data["optIn"] ? 'button' : 'hidden'} type="submit">Submit</button>
                </div>
            </header>

            <FormInputs />

        </form>
    )

    return content
}
export default Form