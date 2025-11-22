import './styles/global.css'
import './styles/theme.css'

import Home from './pages/Home'

import { TaskContextProvider } from './Contexts/TaskContext'

export default function App() {
    return (
        <TaskContextProvider>
            <Home />
        </TaskContextProvider>
    )
}