// UserSearch.js
import axios from "axios";
import { useState } from "react";

import Moon from "./Moon";
import Form from "./Form";
import Result from "./Result";

const UserSearch = () => {
    console.log("rerender")

    const [ birthday, setBirthday ] = useState("first-load");

    const [ dayError, setDayError ] = useState(false);

    const [ futureChild, setFutureChild ] = useState(false);

    const [ moonPhase, setMoonPhase ] = useState("");

    const [ displayResult, setDisplayResult ] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

    // this api mentioned a 10 year rule on the dt, but it seems to work fine after testing a couple of day in earlier years (compared to data from other moon phase generaters)
        axios({
            url: "http://api.weatherapi.com/v1/astronomy.json",
            params: {
                key: "7ae6990957f44017bcd150624232103",
                q: "Toronto",
                dt: birthday
            }
        }).then((apiData) => {

            setMoonPhase(apiData.data.astronomy.astro.moon_phase)
            setDisplayResult(true);
        });
    }

    const handleChange = (e) => {

        const allSelections = e.target.parentElement;

    // value of selected date
        const year = allSelections[0].value;
        const month = allSelections[1].value;
        const day = allSelections[2].value;

        const birthday = `${allSelections[0].value}-${allSelections[1].value}-${allSelections[2].value}`;


        const today = new Date();
        let thisYear = today.getFullYear();
        let thisMonth = today.getMonth() + 1;
        let thisDay = today.getDate();

        try {
            // invalid date handling
            if (year % 4 == 0 && month == "02" && day >= 30 
                || year % 4 > 0 && month == "02" && day >= 29
                || month == "04"  && day == 31|| month == "06"  && day == 31|| month == "09"  && day == 31|| month == "11" && day == 31){
                throw new Error("Invalid date");
                // throw and catch might not be required
            } else if (year >= thisYear && month > thisMonth 
                ||year >= thisYear && month == thisMonth && day > thisDay) {
            // ***EASTER EGG***- future date handling -***EASTER EGG***
                console.log("future child");
                setDayError(false)
                setFutureChild(true)
                setBirthday(birthday);
            } else {
                // valid date handling
                setFutureChild(false)
                setDayError(false);
                setBirthday(birthday);
            }


        } catch (error) {
            console.log(error);

            setFutureChild(false)
            setDayError(true);
            setBirthday("");
        }

    }


    return (
        <main>

            {
                displayResult
                ? null
                : <Moon />
            }
            

            {
                displayResult
                ? null
                : <Form 
                handleSubmit={handleSubmit}
                selectionChange={handleChange}
                formError={dayError}
                loadInfo={birthday}
                futureChild={futureChild}
            />
            }
            

            {
                displayResult
                ? <Result phaseName={moonPhase}/>
                : null
            }
            
        </main>
    )
}

export default UserSearch;