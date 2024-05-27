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
                isSameShipping: false,
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

            <header className="flex-header w-[95%] mx-[0px] mb-[30px] animate-slideInTitle">
                <h2 className="title">{title[page]}</h2>

                <div className="flex-header w-[35%]">

                    <button className={ page > 0  ? 'button' : 'hidden'} onClick={handlePrev} type="button">Prev</button>

                    <button onClick={handleNext} className={showNext ? 'button' : 'hidden'} type="button">Next</button>

                    <button onClick={handleSubmit} className={data["optIn"] ? 'button' : 'hidden'} type="submit">Submit</button>
                </div>
            </header>

            <FormInputs />

            <footer>
                <p className="text-[0.85rem] text-black text-center font-light animate-slideInFooter tab:text-[1rem] pc:text-[1rem]">&copy;2024 Copyright | Designed by <a className="text-white font-bold" href="http://omotoshoelisha@gmail.com">Omotosho E. Oluwasina</a>.</p>
            </footer>


        </form>
    )

    return content
}
export default Form     