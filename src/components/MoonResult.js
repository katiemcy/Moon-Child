import newMoon from "../media/new-moon.jpg";
import waxingCrescent from "../media/waxing-crecsent.jpg";
import firstQuarter from "../media/first-quarter.jpg";
import waningGibbous from "../media/waning-gibbous.jpg";
import fullMoon from "../media/full-moon.jpg";
import waxingGibbous from "../media/waxing-gibbous.jpg";
import lastQuarter from "../media/last-quarter.jpg";
import waningCrescent from "../media/waning-crecsent.jpg";


const MoonResult = (props) => {

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

    return (
        <div className={props.clicked ? "center echoMoon" : "center"}>
            { returnFig() }
        </div>
    )
}
    
    export default MoonResult;