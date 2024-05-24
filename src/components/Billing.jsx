import { useContext } from "react"
import { FormContext } from "../FormContext/FormContext";

const Billing = () => {
    const {data, setData} = useContext(FormContext);

    const content = (
        <div>
            <div className="flex-header">
                <div className="label-container w-[48%]">
                    <label className="label" htmlFor="billFirstName">First Name</label>
                    <input
                        className="input"
                        type="text"
                        id="billFirstName"
                        name="billFirstName"
                        placeholder="Jane"
                        pattern="([A-Z])[\w+.]{1,}"
                        value={data["billFirstName"]}
                        onChange={e => setData({...data, billFirstName: e.target.value})}
                    />
                </div>
                <div className="label-container w-[48%]">
                    <label className="label" htmlFor="billLastName">Last Name</label>
                    <input
                        className="input"
                        type="text"
                        id="billLastName"
                        name="billLastName"
                        placeholder="Doe"
                        pattern="([A-Z])[\w+.]{1,}"
                        value={data["billLastName"]}
                        onChange={e => setData({...data, billLastName: e.target.value})}
                    />
                </div>
            </div>

            <div className="label-container">
            <label className="label" htmlFor="billAddress1">Address</label>
                        <input
                            className="input"
                            type="text"
                            id="billAddress1"
                            name="billAddress1"
                            placeholder="555 Wallaby Way"
                            pattern="[\w\d\s.#]{2,}"
                            value={data["billAddress1"]}
                            onChange={e => setData({...data, billAddress1: e.target.value})}
                        />
            </div>

            <div className="label-container">
            <label className="label" htmlFor="billCity">City</label>
            <input
                className="input"
                type="text"
                id="billCity"
                name="billCity"
                placeholder="New York"
                pattern="([A-Z])[\w\s.]{1,}"
                value={data["billCity"]}
                onChange={e => setData({...data, billCity: e.target.value})}
            />
            </div>

            <div className="label-container">
            <label className="label" htmlFor="billState">State</label>
            <select
                className="input"
                id="billState"
                name="billState"
                value={data["billState"]}
                onChange={e => setData({...data, billState: e.target.value})}
                defaultValue={""}
            >
                <option value="">Choose a state</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
            </select>
            </div>

            <div className="label-container">
            <label className="label" htmlFor="billZipCode">Zip Code</label>
            <input
                className="input"
                type="text"
                id="billZipCode"
                name="billZipCode"
                placeholder="12345"
                pattern="[0-9]{5}"
                maxLength="5"
                value={data["billZipCode"]}
                onChange={e => setData({...data, billZipCode: e.target.value})}
            />
            </div>
        </div>
    )

    return content
}
export default Billing