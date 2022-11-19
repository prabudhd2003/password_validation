import Workdays from "./Workdays";
import Weekends from "./Weekends";
function CurrentMessage() {
    let day = new Date().getDay();

    return (
        {day>=1 && day<=5 
        ? <Workdays/> 
        : <Weekends/>} ;
    )
}

export default CurrentMessage;