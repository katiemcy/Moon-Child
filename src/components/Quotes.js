import firebase from'./firebase';
import toCamelCase from './toCamelCase';

import { useEffect, useRef, useState } from 'react';
import { getDatabase, ref, get } from 'firebase/database'


const Quotes = (props) => {
    const [ savedQuotes, setSavedQuotes ] = useState([])
    
    const getData = () => {
        const database = getDatabase(firebase);
        const savedQuotesRef = ref(database, `/userQuotes/${toCamelCase(props.phaseName)}`)
        
        get(savedQuotesRef).then((snapshot)=> {
            if(snapshot.exists()){
                const shuffleQuotes = [];
                const data = snapshot.val();

                for (let key in data) {
                    shuffleQuotes.push(data[key]);
                }
                

                // shuffle array using the Fisher-Yates algorithm
                for (let i = shuffleQuotes.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [shuffleQuotes[i], shuffleQuotes[j]] = [shuffleQuotes[j], shuffleQuotes[i]];
                }
                // assign a new array to the first 6 quotes on the randomized array
                const quotesDisplay = shuffleQuotes.slice(0,6);

                setSavedQuotes(quotesDisplay)
            }
        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        getData();
    }, [])


    return (
        <section className="quotes">
            <div className="wrapper">
                <ul className="siblingsQuotes">
                    {savedQuotes.map((data, index) => {
                        return (
                            <li key={index}>
                                <p>{data.name}:</p>
                                <p>"{data.echo}"</p>
                            </li>
                        )
                    })}
                </ul>                
            </div>
        </section>
        
    )
}

export default Quotes;