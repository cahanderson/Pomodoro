import {GoGear} from 'react-icons/go'
import './styles.scss'

export function ConfigButton(props){
    return(
        <button {...props} className="ButtonConfig"><GoGear /></button>
    )
}