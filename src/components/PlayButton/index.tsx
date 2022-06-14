import {BsPlayCircle} from 'react-icons/Bs'

import '../PauseButton/styles.scss'
export function PlayButton(props){
    return(
        <button {...props} className='buttonPausePlay'><BsPlayCircle /></button>
    )
}