import { Link } from 'react-router-dom';
import { useState } from 'react';


const Header = () => {
    
    const [ clicked, setClicked ] = useState(false);

    const handleClick = () => {
        clicked
        ? setClicked(false)
        : setClicked(true)
    }

    const refreshPage = () => {
        return () => window.location.reload()
    }

    return (
        <header>
            <div className="headerFlex wrapper">
                <h1>
                    <i className={clicked? "fa-regular fa-moon clicked": "fa-regular fa-moon"} onClick={handleClick} />
                    
                </h1>
                <div className={clicked? "toggleNav clicked": "toggleNav"} >
                    <div className="starIcon">
                        <i className={clicked? "fa-solid fa-star clicked": "fa-solid fa-star" } />
                    </div>
                    <nav>
                        <ul className={clicked? "navUl clicked": "navUl" }>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/credit">Quotes</Link>
                            </li>
                            <li>
                                <Link to="/credit">Credit</Link>
                            </li>
                        </ul>
                    </nav> 
                </div>
                
            </div>
        </header>
    )
}

export default Header;