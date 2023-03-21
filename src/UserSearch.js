// UserSearch.js
import axios from "axios";

const UserSearch = () => {
    // const [ moonPhase, setMoonPhase ] = useState("");

    axios({
        url: "http://api.weatherapi.com/v1/astronomy.json",
        params: {
            key: "7ae6990957f44017bcd150624232103",
            q: "Toronto",
            dt: "1996-06-20"
        }
    }).then((apiData) => {
        console.log(apiData);
    })

    return (
        <>
            <h2>What kind of moon child are you?</h2>
        </>
    )
}

export default UserSearch;