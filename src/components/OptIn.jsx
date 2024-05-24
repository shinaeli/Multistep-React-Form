import { useContext } from "react"
import { FormContext } from "../FormContext/FormContext"

const OptIn = () => {
    const { data, setData } = useContext(FormContext);
    const content = (
        <>
            <label htmlFor="optInNews">
                <input type="checkbox" id="optInNews" name="optInNews" value={data["optIn"]} onChange={() => setData({...data, optIn: !data["optIn"]})} checked={data["optIn"]} />
                Receive our newsletter
            </label>
            <ul>
                <li>Save 10% Now</li>
                <li>Receive Discount Coupons</li>
                <li>Find Out About New Products</li>
            </ul>
        </>
    )

    return content
}
export default OptIn