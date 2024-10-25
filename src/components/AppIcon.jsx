import "../styles/appIcon.css";
import appIcon from "../assets/appIcon.svg"
import eduquiz_text from "../assets/eduquiz_text.svg"

export const AppIcon = () => {
    return (
        <>
            <img src={appIcon} alt="Logo EduQuiz" className="app-icon" />
            <img src={eduquiz_text} alt="EDUQUIZ" className="app-name" />
            
        </>
    );
}