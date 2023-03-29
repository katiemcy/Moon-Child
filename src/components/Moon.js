// import waxingCrescent from "../media/waxing-crescent.jpg";
import moonVid from "../media/moon-phase-1-cycle.mp4";
import newMoon from "../media/new-moon.jpg";

const Moon = () => {
    return (
            <div className="moonVisual">
                {/* <div className="moonVid"> */}
                    <video muted loop autoPlay={true}>
                        <source src={moonVid} type="video/mp4"/>
                    </video>
                {/* </div> */}
                <figure className="moon"><img src={newMoon} alt="new moon" /></figure>
            </div>
    )
}

export default Moon;
