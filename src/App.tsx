
import { Pomo } from "./components/Pomo";
import { ModalContext } from "./ModalContext";

export function App(){
  return(
    <ModalContext>
      <Pomo />
    </ModalContext>
  )
}