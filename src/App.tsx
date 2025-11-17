import Contador from './Components/Contador'
import Container from './Components/Container'
import DefaultInput from './Components/DefaultInput'
import Logo from './Components/Logo'
import Menu from './Components/Menu'

import './styles/global.css'
import './styles/theme.css'

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
                        <DefaultInput //Componente criado por mim em src/Components/DefaultInput/index.tsx
                            type='text' 
                            id="meuInput" 
                            labelText="Atividade em curso:" 
                        />
                    </div>
                    
                    <div className="formRow">
                        <div>
                            Lorem ipsum dolor sit amet.
                        </div>
                    </div>

                    <div className="formRow">
                        <div>
                            Ciclos:
                        </div>

                        <div>
                            000000
                        </div>
                    </div>

                    <div className="formRow">
                        <button type="submit">Começar</button>
                    </div>
                </form>
            </Container>
        </>
    )
}