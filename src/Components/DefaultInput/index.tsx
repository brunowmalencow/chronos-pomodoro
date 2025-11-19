import styles from './styles.module.css'

type DefaultInputProps = {
    id: string,
    labelText?: string,
} & React.ComponentProps<"input">

export default function DefaultInput({id, labelText, type, ...rest}: DefaultInputProps) {
    // Ao invés de ter uma condicional para renderizar a label, pode-se usar o operador lógico '&&'    
    // {labelText ? (<label htmlFor={id}>{labelText}</label>) : ''}
    
    return (
        <> 
        {labelText && (<label htmlFor={id}>{labelText}</label>)}
            <input className={styles.input} type={type} id={id} {...rest} />
        </>
    )
}
