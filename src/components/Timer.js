function Timer() {
    const date = new Date();
    const day = date.getDay();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();



    return (
        <div className="Timer">

            <div className="Countdowntimer">
                
                <div className="section">
                    <p>{day}</p>
                </div>
                <div className="section">
                    <p>{hour}</p>
                </div>
                <div className="section">
                    <p>{minutes}</p>
                </div>
                <div className="section">
                    <p>{seconds}</p>
                </div>

            </div>
        </div>
    )
}

export default Timer;