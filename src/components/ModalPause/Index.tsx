import { useEffect, useState } from "react"
import format from 'date-fns/format'
import './styles.scss'
import { useModal } from "../../ModalContext"

interface PropsModal{
    onClosePause : ()=>void
}

export function ModalPause({onClosePause}:PropsModal){
    const {periodPause} = useModal()
    const [timer, setTimer] = useState(periodPause)
    const[timeLeft, setTimeLeft] = useState(format(timer*1000,'mm:ss'))
    const[isActive, setIsActive] = useState(true)
    const [store, setStore] = useState<number>()
    
    useEffect(()=>{
        if(isActive){
            setStore(setTimeout(()=>{
                setTimer(timer-1)
                setTimeLeft( format(timer*1000,'mm:ss'))
                if(timer ==0){
                    StopTimer()
                    // setIsFinalized(true)
                }
            },1000))
        }else{
            clearTimeout(store)
        }
    },[timer, isActive])

    function StopTimer(){
        setIsActive(false)
        onClosePause()
    }
    return(
        <div className="modal">''
            <div className="content">
            <button onClick={onClosePause} className='close'>X</button>
                <header>
                    <h2>Pause Break</h2>
                </header>
                {timeLeft}
            </div>
        </div>
    )
}