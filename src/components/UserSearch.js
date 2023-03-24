// UserSearch.js
import axios from "axios";
import { useState } from "react";

import Form from "./Form";
import Result from "./Result";

const UserSearch = () => {
    const [ birthday, setBirthday ] = useState("");

    const [ moonPhase, setMoonPhase ] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

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

    }

    const handleChange = (e) => {
        const allSelections = e.target.parentElement;

        const birthday = `${allSelections[0].value}-${allSelections[1].value}-${allSelections[2].value}`;

        setBirthday(birthday)
        // **** TO DO: setBirthday onLoad or change drop down to not display numbers onLoad
    }


    return (
        <>
            <Form 
                handleSubmit={handleSubmit}
                selectionChange={handleChange}
            />

            <Result phaseName={moonPhase}/>
            
        </>
    )
}

export default UserSearch;