import { useState } from 'react'

import styles from './styles.module.css'

//const [state, setState] = useState(0)

export default function Contador() {
    return (
        <div className={styles.contador}>
            00:00
        </div>
    )
}