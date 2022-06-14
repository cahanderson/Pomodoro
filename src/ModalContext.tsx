import { ReactNode } from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

interface ModalContext{
    children: ReactNode
}
interface ModalContextData{
    onChangePomodoro: (f:number) => void
    onChangePause: (f:number) => void
    period: number
    periodPause: number
}    

const Context = createContext<ModalContextData>({} as ModalContextData )

export function ModalContext({children}:ModalContext){
    const [period, setPeriod] = useState(1500)
    const [periodPause, setPeriodPause] = useState(300)
    function onChangePomodoro(f:number){
        if(f >=3600){
            setPeriod(3599)
        }else{
            setPeriod(f)
        }
    }

    function onChangePause(f:number){
        if(f >=3600){
            setPeriodPause(3599)
        }else{
            setPeriodPause(f)
        }
    }
    return(
        <Context.Provider value={{onChangePomodoro, onChangePause, period, periodPause}}>
            {children}
        </Context.Provider>
    )
}

export function useModal(){
    const context = useContext(Context)

    return context
}