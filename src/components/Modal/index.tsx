import { useModal } from '../../ModalContext'
import './styles.scss'
interface PropsModal{
    onClose : ()=>void
}

export function Modal({onClose}:PropsModal){
    const {onChangePomodoro, onChangePause} = useModal()
    return(
        <div className="modal">
            <div className="content">
                <button onClick={onClose} className='close'>X</button>
                    <h2>Pomodoro Timer</h2>
                <section className='pomo'>
                    Minutes:
                    <input
                        className='inputNumber'
                        type='number'
                        min='0' 
                        max='60'
                        onChange={e => onChangePomodoro((e.target.valueAsNumber)*60)}
                    />
                </section>    
                <h2>Pause Timer</h2>
                    <section className='pause'>
                        Minutes:
                        <input
                            className='inputNumber'
                            type='number'
                            min='0' 
                            max='60'
                            onChange={e => onChangePause((e.target.valueAsNumber)*60)}
                        />
                    </section>    
            </div>
        </div>
    )
}