import { PlayCircleIcon } from "lucide-react";
import Ciclos from "../Ciclos";
import DefaultButton from "../DefaultButton";
import DefaultInput from "../DefaultInput";

export default function MainForm() {
    return (
        <form className='form' action="">
            <div className="formRow">
                <DefaultInput
                    type='text'
                    id="meuInput"
                    placeholder='Digite sua tarefa'
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