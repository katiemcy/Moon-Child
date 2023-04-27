import { Link } from 'react-router-dom';

const Form = (props) => {

    const yearOptions = () => {

        let years = [];

        const today = new Date();
        let thisYear = today.getFullYear();
        for (let year = thisYear; year >= 1923; year--) {
            years.push(<option value={year} key={year}>{year}</option>)
        }

        return years;
    }

    const dayMonthOptions = (min, max) => {
        let options = [];

        for (let n = min; n <= max; n++) {
            if (n < 10) {
                const num = "0" + n;
                options.push(<option value={num} key={num}>{num}</option>);
            } else {
                options.push(<option value={n} key={n}>{n}</option>);
            }
        }

        return options;
    }

    return (
        <section className="formSection">
            <div className="wrapper">
                <h2>What kind of moon child <Link to="/about" className='aboutLink'>&#9432;</Link> are you?</h2>
                <p>Enter your birthday:</p>


                <form className="birthdayForm" onSubmit={props.handleSubmit}>


                    <label htmlFor="birthYear" className="sr-only">Year</label> 
                    <select name="birthYear" id="birthYear" onChange={props.selectionChange} aria-describedby="error">
                        { yearOptions () }
                    </select>

                    <label htmlFor="birthMonth" className="sr-only">Month</label> 
                    <select name="birthMonth" id="birthMonth" onChange={props.selectionChange} aria-describedby="error">
                        { dayMonthOptions(1, 12) }
                    </select>

                    <label htmlFor="birthDay" className="sr-only">Day</label> 
                    <select name="birthDay" id="birthDay" onChange={props.selectionChange} aria-describedby="error">
                        { dayMonthOptions(1, 31) }
                    </select>
                    
                    {
                        props.futureChild
                            ? <p className="futureChild visible">Hi there, future child</p>
                            : <p className="futureChild hidden">Hi there, future child</p>
                    }

                    {
                        props.formError
                            ? <p className="dayError visible"><strong>Invalid date</strong></p>
                            : <p className="dayError hidden"><strong>Invalid date</strong></p>
                    }

                    {
                        props.formError || props.loadInfo === "first-load"
                            ? <button className="hidden">Submit</button>
                            : <button className="visible">Submit</button>
                    }
                    
                </form>
            </div>
        </section>
    )
}

export default Form;