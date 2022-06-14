import { useEffect } from 'react'
import { useState} from 'react'
import format from 'date-fns/format'
import '../../styles/global.module.scss'
import './styles.scss'

import { ConfigButton } from '../configButton'
import { PauseButton } from '../PauseButton'
import { PlayButton } from '../PlayButton'
import { StopButton } from '../StopButton'
import { Modal } from '../Modal'
import { useModal } from '../../ModalContext'
import { ModalPause } from '../ModalPause/Index'

export function Pomo(){
    const {period} = useModal()
    const [timer, setTimer] = useState(period)
    const[timeLeft, setTimeLeft] = useState(format(timer*1000,'mm:ss'))
    const[isActive, setIsActive] = useState(false)
    const [store, setStore] = useState<number>()
    // const[isFinalized, setIsFinalized] = useState(true)
    const[isOpenModal, setIsOpenModal] = useState(false)
    const[isOpenPause, setIsOpenPause] = useState(false)

    useEffect(()=>{
        if(isActive){
            setStore(setTimeout(()=>{
                setTimer(timer-1)
                setTimeLeft( format(timer*1000,'mm:ss'))
                if(timer ==0){
                    StopTimer()
                    setIsOpenPause(true)
                }
            },1000))
        }else{
            clearTimeout(store)
        }
    },[timer, isActive])
    
    useEffect(()=>{
        StopTimer()
    },[period])

    function StopTimer(){
        setIsActive(false)
        setTimer(period)
        setTimeLeft( format(period*1000,'mm:ss'))
    }
    function onCloseConfig(){
        setIsOpenModal(!isOpenModal)
    }
    function onClosePause(){
        setIsOpenPause(!isOpenPause)
    }
    
    return(
        <div className='pomo'>
            <div className='content'>
                <span>{timeLeft}</span>
                <div className='buttons'>
                    {isActive? <PauseButton onClick = {()=>setIsActive(false)} /> : <PlayButton onClick = {()=>setIsActive(true)} />}
                    <StopButton onClick={StopTimer} />
                </div>
                <div className='buttonConfig'>
                        <ConfigButton
                            onClick={()=>setIsOpenModal(!isOpenModal)}
                        />
                </div>
                {isOpenModal?<Modal onClose={onCloseConfig}/>:null}
                {isOpenPause? <ModalPause onClosePause={onClosePause} /> : null}
            </div>

        </div>
    )
}