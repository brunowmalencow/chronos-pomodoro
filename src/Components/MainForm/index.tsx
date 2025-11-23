import { PlayCircleIcon } from "lucide-react";
import Ciclos from "../Ciclos";
import DefaultButton from "../DefaultButton";
import DefaultInput from "../DefaultInput";
import { useRef, useState } from "react";

export default function MainForm() {

    // Tem que tipar o elemento para que o "ref" dê certo
     const taskNameInput = useRef<HTMLInputElement>(null)
    
    function handleSubmitTask(event: React.FormEvent<HTMLInputElement>){
        event.preventDefault()
    }
    
    return (
        <form onSubmit={handleSubmitTask} className='form' action="">
            <div className="formRow">
                <DefaultInput
                    type='text'
                    id="meuInput"
                    placeholder='Digite sua tarefa'
                    ref={taskNameInput}
                />
            </div>

            <div className="formRow">
                <div>
                    Lorem ipsum dolor sit amet.
                </div>
            </div>

            <div className="formRow">
                <Ciclos />
            </div>

            <div className="formRow">
                <DefaultButton icon={<PlayCircleIcon />} color='green' />
            </div>
        </form>
    )
}