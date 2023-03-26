// import waxingCrescent from "../media/waxing-crescent.jpg";
import moonVid from "../media/moon-phase-1-cycle.mp4";

const Moon = () => {
    return (
            <div className="moonVisual">
                <video muted loop autoPlay={true}>
                    <source src={moonVid} type="video/mp4"/>
                </video>
                {/* <figure className="moon"><img src={waxingCrescent} alt="waxing crescent moon" /></figure> */}
            </div>
    )
}

export default Moon;
