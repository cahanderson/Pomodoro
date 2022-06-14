import './styles.scss'
import {BiReset} from 'react-icons/Bi'

export function StopButton(props){
    return(
        <button {...props} className="Stop"><BiReset /></button>
    )
}