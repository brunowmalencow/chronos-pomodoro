import { PlayCircleIcon } from 'lucide-react'
import Ciclos from './Components/Ciclos'
import Contador from './Components/Contador'
import Container from './Components/Container'
import DefaultButton from './Components/DefaultButton'
import DefaultInput from './Components/DefaultInput'
import Logo from './Components/Logo'
import Menu from './Components/Menu'

import './styles/global.css'
import './styles/theme.css'
import Footer from './Components/Footer'

export default function App() {
    return (
        <>
            <Container>
                <Logo />
            </Container>

            <Container>
                <Menu />
            </Container>

            <Container>
                <Contador />
            </Container>

            <Container>
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
                        <DefaultButton icon={<PlayCircleIcon />} color='green'/>
                    </div>
                </form>
            </Container>

            <Container>
                <Footer />
            </Container>
        </>
    )
}