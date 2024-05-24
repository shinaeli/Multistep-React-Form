import { useContext, useState } from "react"
import { FormContext } from "../FormContext/FormContext"

const Shipping = () => {
    const {data, setData} = useContext(FormContext)
    const [sameShipping, setSameShipping] = useState(false);

    const content = (
        <>
            <div className="mb-[20px]">
            <label className="label" htmlFor="sameAsBilling">
                <input
                    type="checkbox"
                    id="sameAsBilling"
                    name="sameAsBilling"
                    value={sameShipping}
                    onChange={() => setSameShipping(prev => !prev)}
                />
                Same as Billing Address
            </label>
            </div>

            <div className="flex-header">
                <div className="label-container w-[48%]">
                    <label className="label" htmlFor="shipFirstName">First Name</label>
                    <input
                        className="input"
                        type="text"
                        id="shipFirstName"
                        name="shipFirstName"
                        placeholder="Jane"
                        pattern="([A-Z])[\w+.]{1,}"
                        value={sameShipping ? data["billFirstName"] : data["shipFirstName"]}
                        onChange={e => setData({...data, shipFirstName: e.target.value})}
                        disabled={sameShipping}
                    />
                </div>
                <div className="label-container w-[48%]">
                    <label className="label" htmlFor="shipLastName">Last Name</label>
                    <input
                        className="input"
                        type="text"
                        id="shipLastName"
                        name="shipLastName"
                        placeholder="Doe"
                        pattern="([A-Z])[\w+.]{1,}"
                        value={sameShipping ? data["billLastName"] : data["shipLastName"]}
                        onChange={e => setData({...data, shipLastName: e.target.value})}
                        disabled={sameShipping}
                    />
                </div>
            </div>

            <div className="label-container">
            <label className="label" htmlFor="shipAddress1">Address</label>
            <input
                className="input"
                type="text"
                id="shipAddress1"
                name="shipAddress1"
                placeholder="555 Wallaby Way"
                pattern="[\w\d\s.#]{2,}"
                value={sameShipping ? data["billAddress1"] : data["shipAddress1"]}
                onChange={e => setData({...data, shipAddress1: e.target.value})}
                disabled={sameShipping}
            />
            </div>

            <div className="label-container">
            <label className="label" htmlFor="shipCity">City</label>
            <input
                className="input"
                type="text"
                id="shipCity"
                name="ship-city"
                placeholder="New York"
                pattern="([A-Z])[\w\s.]{1,}"
                value={sameShipping ? data["billCity"] : data["shipCity"]}
                onChange={e => setData({...data, shipCity: e.target.value})}
                disabled={sameShipping}
            />
            </div>

            <div className="label-container">
            <label className="label" htmlFor="shipState">State</label>
            <select
                className="input"
                id="shipState"
                name="shipState"
                value={sameShipping ? data["billState"] : data["shipState"]}
                onChange={e => setData({...data, shipState: e.target.value})}
                disabled={sameShipping}
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
            <label className="label" htmlFor="shipZipCode">Zip Code</label>
            <input
                className="input"
                type="text"
                id="shipZipCode"
                name="shipZipCode"
                placeholder="12345"
                pattern="[0-9]{5}"
                maxLength="5"
                value={sameShipping ? data["billZipCode"] : data["shipZipCode"]}
                onChange={e => setData({...data, shipZipCode: e.target.value})}
                disabled={sameShipping}
            />
            </div>
        </>
    )

    return content
}
export default Shipping