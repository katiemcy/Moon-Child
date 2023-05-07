const Result = (props) => {


const blackFontPhase = [
    "Waxing Gibbous", "Full Moon", "Waning Gibbous" 
]

const whiteFontPhase = [
    "New Moon", "Waxing Crescent", "First Quarter", "Last Quarter", "Waning Crescent"
]

    return (
            <>
                { 
                    blackFontPhase.map(phase => {
                        return phase === props.phaseName
                        ? <div key={phase}>
                            <p className="blackFont">{props.phaseName}</p>
                            <p className="resultBday blackFont">{props.birthday}</p>
                          </div>
                        : null
                    })
                }
                { 
                    whiteFontPhase.map(phase => {
                        return phase === props.phaseName
                        ? <div key={phase}>
                            <p>{props.phaseName}</p>
                            <p className="resultBday">{props.birthday}</p>
                          </div>
                        : null
                    })
                }
            </>
    )
}

export default Result;