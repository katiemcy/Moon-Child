// UserSearch.js
import axios from "axios";
import { useState } from "react";

import Moon from "./Moon";
import Form from "./Form";
import Result from "./Result";

const UserSearch = () => {
    console.log("rerender")
    const [ birthday, setBirthday ] = useState("");

    const [ dayError, setDayError ] = useState(false);

    const [ moonPhase, setMoonPhase ] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(birthday);

    // this api mentioned a 10 year rule on the dt, but it seems to work fine after testing a couple of day in earlier years (compared to data from other moon phase generaters)
        axios({
            url: "http://api.weatherapi.com/v1/astronomy.json",
            params: {
                key: "7ae6990957f44017bcd150624232103",
                q: "Toronto",
                dt: birthday
            }
        }).then((apiData) => {
            console.log(apiData);

            setMoonPhase(apiData.data.astronomy.astro.moon_phase)
        });
// TO DO: Confirm if error handling is needed here
    }

    const handleChange = (e) => {
        


        const allSelections = e.target.parentElement;

        const year = allSelections[0].value;
        const month = allSelections[1].value;
        const day = allSelections[2].value;

        try {
            if (year % 4 == 0 && month == "02" && day >= 30 
                || year % 4 > 0 && month == "02" && day >= 29
                || month == "04"  && day == 31|| month == "06"  && day == 31|| month == "09"  && day == 31|| month == "11" && day == 31){
                throw new Error("Invalid date");
            }

            const birthday = `${allSelections[0].value}-${allSelections[1].value}-${allSelections[2].value}`;

            setBirthday(birthday)
            // **** TO DO: setBirthday onLoad or change drop down to not display numbers onLoad
        } catch (error) {
            console.log(error);

            setDayError(true);
            setBirthday("");
        }
        


    }


    return (
        <main>
            <Moon />
            <Form 
                handleSubmit={handleSubmit}
                selectionChange={handleChange}
                formError={dayError}
            />

            <Result phaseName={moonPhase}/>
            
        </main>
    )
}

export default UserSearch;