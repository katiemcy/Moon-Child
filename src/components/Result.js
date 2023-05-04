import newMoon from "../media/new-moon.jpg";
import waxingCrescent from "../media/waxing-crecsent.jpg";
import firstQuarter from "../media/first-quarter.jpg";
import waningGibbous from "../media/waning-gibbous.jpg";
import fullMoon from "../media/full-moon.jpg";
import waxingGibbous from "../media/waxing-gibbous.jpg";
import lastQuarter from "../media/last-quarter.jpg";
import waningCrescent from "../media/waning-crecsent.jpg";


const Result = (props) => {

    const returnFig = () => {

        const phaseImg = [
            newMoon, waxingCrescent, firstQuarter, waningGibbous, fullMoon, waxingGibbous, lastQuarter, waningCrescent
        ]

        const phaseString = [
            "New Moon", "Waxing Crescent", "First Quarter", "Waning Gibbous", "Full Moon", "Waxing Gibbous", "Last Quarter", "Waning Crescent"
        ]

        for (let i = 0; i < phaseImg.length; i++) {
            if (phaseString[i] === props.phaseName){
                return <figure><img src={phaseImg[i]} alt={phaseString[i]} /></figure>
            }
        }
    }

// function to create resulting text element in black
    const assignClass = () => {
        const blackFontPhase = [
            "Waxing Gibbous", "Full Moon", "Waning Gibbous" 
        ]

        let resultText = ``

        for (let i = 0; i < blackFontPhase.length; i++) {
            if (blackFontPhase[i] === props.phaseName) {
                resultText = <p className="blackFont">{props.phaseName}</p>;
                // exit immediately after matching blackFont phase 
                return resultText
            } else {
                resultText = <p>{props.phaseName}</p>
            }
        }

        return resultText
    }

    assignClass()

    return (
        <section className="result">

            <div className="center">
                { returnFig() }
            </div>

            <div className="center">
                { assignClass() }
            </div>
            
        </section>
    )
}

export default Result;