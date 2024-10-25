import "../styles/timer.css";

export const Timer = ({current}) => {
    return (
        <>
            <div className="time-circle">
                {current}
            </div>
        </>
    );
}