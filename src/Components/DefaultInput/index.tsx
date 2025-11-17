type DefaultInputProps = {
    id: string,
    labelText?: string,
} & React.ComponentProps<"input">

export default function DefaultInput({id, labelText, type}: DefaultInputProps) {
    return (
        <>
        {labelText ? (<label htmlFor={id}>{labelText}</label>) : null}
            <input type={type} id={id} />
        </>
    )
}
