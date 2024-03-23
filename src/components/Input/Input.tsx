import "./Input.scss"

type PropsInput = {
    type?: string
    className?: string | undefined,
    placeholder: string
}

export function Input({type="text", className, placeholder = ""} : PropsInput) {
    return (
        <input type={type} className={`input ${className}`} placeholder={placeholder} />
    );
}
