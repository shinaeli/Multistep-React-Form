import { useContext } from "react"
import Billing from "./Billing"
import OptIn from "./OptIn"
import Shipping from "./Shipping"
import { FormContext } from "../FormContext/FormContext"

const FormInputs = () => {
    const {page} = useContext(FormContext)

    const display = {
        0: <Billing />,
        1: <Shipping />,
        2: <OptIn />
    }

    const content = (
        <div>
            {display[page]}
        </div>
    )


    return content
}
export default FormInputs