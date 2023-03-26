import firebase from'./firebase';

import { useEffect, useRef, useState } from 'react';
import { getDatabase, ref, get } from 'firebase/database'


const Quotes = () => {
    console.log("quote render")
    // used to store data from database without re rendering the component
    const quotesRef = useRef(0);

    const [ savedQuotes, setSavedQuotes ] = useState([])
    
    useEffect(() => {
        // Ref: https://react.dev/learn/synchronizing-with-effects#what-are-effects-and-how-are-they-different-from-events
            // cleanup function to ensure the effect is only running once
        let ignore = false;

        const database = getDatabase(firebase);
        const dbRef = ref(database)
        const savedQuotesRef = ref(database, "/userQuotes/newMoon")

        const getData = () => {
           get(savedQuotesRef).then((snapshot)=> {
                // if(snapshot.exists()){
                    if (!ignore) {
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

                        console.log(quotesDisplay)

                        setSavedQuotes(quotesDisplay)
                        // useRef(quotesDisplay)

                        // console.log(quotesRef.current)
                    }
            //     } else {
            //         console.log("no data available")
            //     }
            // }).catch((error)=> {
            //     console.log(error)
            })
        }

        getData();

        return () => {
            ignore = true;
        };
        
    }, [])

    console.log(savedQuotes)

    const handleQuotes = (array) => {
        if (array.length === 0) {
            console.log("empty array")
        } else {
            console.log("I got some quotes")
            console.log(array)

            const displayQuotes = (quote) => {
                let quotes = [];

                for (let n = 0; n < quote.length; n++) {
                    quotes.push(<li key={n}>{quote[n]}</li>)
                }
                console.log(quotes)
                return quotes
            }

            return displayQuotes(array);
        }
    }

    return (
        <section className="quotes">
            <div className="wrapper">
                <ul className="siblingsQuotes">
                    { handleQuotes(savedQuotes) }
                </ul>                
            </div>

        </section>
        
    )
}

export default Quotes;