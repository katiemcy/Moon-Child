import { Link } from 'react-router-dom';

const Header = (props) => {

    return (
        <header>
            <div className="headerFlex wrapper">
                <button className={props.clicked? "logo clicked": "logo" } tabIndex={0} onClick={props.handleClick}>  
                    <i className="fa-regular fa-moon" aria-describedby='moon icon' />
                </button>
                
                <div className={props.clicked? "toggleNav clicked": "toggleNav"} >
                    <div className="starIcon">
                        <i className={props.clicked? "fa-solid fa-star clicked": "fa-solid fa-star" } />
                    </div>
                    <nav>
                        <ul className={props.clicked? "navUl clicked": "navUl" }>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            {/* <li>
                                <Link to="/comingSoon" onClick={props.handleClick}>C-space</Link>
                            </li> */}
                            <li>
                                <Link to="/about" onClick={props.handleClick}>About</Link>
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