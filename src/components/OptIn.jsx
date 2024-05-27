import { useContext } from "react"
import { FormContext } from "../FormContext/FormContext"

const OptIn = () => {
    const { data, setData } = useContext(FormContext);
    const content = (
        <div className="optin">
            <label htmlFor="optInNews">
                <input type="checkbox" id="optInNews" name="optInNews" value={data["optIn"]} onChange={() => setData({...data, optIn: !data["optIn"]})} checked={data["optIn"]} />
                <span className="offer">
                    Receive our newsletter
                </span>
            </label>
            <ul className="my-[20px]">
                <li className="offer">Save 10% Now</li>
                <li className="offer">Receive Discount Coupons</li>
                <li className="offer">Find Out About New Products</li>
            </ul>
        </div>
    )

    return content
}
export default OptIn