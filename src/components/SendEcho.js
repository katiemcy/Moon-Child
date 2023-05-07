import firebase from'./firebase';
import toCamelCase from './toCamelCase';

import { useEffect, useState } from "react";
import { getDatabase, ref, get, push } from 'firebase/database';

const SendEcho = (props) => {
    const [ nickname, setNickName ] = useState("");

    const [ goNext, setGoNext] = useState(false);

    const [ defaultQuotes, setDefaultQuotes ] = useState([]);

    const [ selectedQuotes, setSelectedQuotes ] = useState("");


    const handleInput = (e) => {
        setNickName(e.target.value)
    }

    const handleNext = () => {
        setGoNext(true)
    }

    const getData = () => {
        const database = getDatabase(firebase);
        const quotesRef = ref(database, `/quotes`)

        get(quotesRef).then((snapshot) => {
            if(snapshot.exists()){
                const data = snapshot.val();

                setDefaultQuotes(data);
            }
        }).catch((error) => {
            console.log(error)
        })
    }

    const handleSelect = (e) => {
        setSelectedQuotes(`${e.target.form[0].value}, ${e.target.form[1].value}`)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const database = getDatabase(firebase);
        const userQuotesRef = ref(database, `/userQuotes/${toCamelCase(props.phaseName)}`)

        push(userQuotesRef, {echo: selectedQuotes, name: nickname})
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <form className="echoForm" onSubmit={handleSubmit}>
            {
                goNext
                ? null
                : <div className="enterName">
                    <label htmlFor="nickname" >Enter nickname:</label>
                    <input type="text" name="nickname" id="nickname" onChange={handleInput}/>

                    <button type="button" onClick={handleNext}>Submit</button>
                  </div>
            }


            {
                goNext
                ? <div className="submitEcho">

                    {/* <p>{selectedQuotes}</p> */}

                    <label htmlFor="firstEcho" className="sr-only">First Echo</label>
                    <select name="firstEcho" id="firstEcho"  onChange={handleSelect}>
                        {
                            defaultQuotes.map((quote, index) => {
                                return <option value={quote} key={index}>{quote},</option>
                            })
                        }
                    </select>

                    <label htmlFor="secondEcho" className="sr-only">Second Echo</label>
                    <select name="secondEcho" id="secondEcho"  onChange={handleSelect}>
                        {
                            defaultQuotes.map((quote, index) => {
                                return <option value={quote.charAt(0).toLowerCase() + quote.slice(1) + "."} key={index}>{quote.charAt(0).toLowerCase() + quote.slice(1) + "."}</option>
                            })
                        }
                    </select>

                    <button type="submit">Send Echo</button>

                  </div>
                : null
            }


        </form>
    )
}

export default SendEcho;