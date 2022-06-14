import './styles.scss'
import {BsPauseCircle} from 'react-icons/Bs'
export function PauseButton(props){
    return(
        <button {...props} className="buttonPausePlay"><BsPauseCircle /></button>
    )
}