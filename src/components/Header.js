import { Link } from 'react-router-dom';


const Header = (props) => {
    
    const refreshPage = () => {
        return () => window.location.reload()
    }

    return (
        <header>
            <div className="headerFlex wrapper">
                <h1>
                    <i className={props.clicked? "fa-regular fa-moon clicked": "fa-regular fa-moon"} onClick={props.handleClick} />
                    
                </h1>
                <div className={props.clicked? "toggleNav clicked": "toggleNav"} >
                    <div className="starIcon">
                        <i className={props.clicked? "fa-solid fa-star clicked": "fa-solid fa-star" } />
                    </div>
                    <nav>
                        <ul className={props.clicked? "navUl clicked": "navUl" }>
                            <li>
                                {/* <Link to="/" onClick={handleClick}>Home</Link> */}
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <Link to="/comingSoon" onClick={props.handleClick}>C-space</Link>
                            </li>
                            <li>
                                <Link to="/credit" onClick={props.handleClick}>Credit</Link>
                            </li>
                        </ul>
                    </nav> 
                </div>
                
            </div>
        </header>
             
    )
}

export default Header;