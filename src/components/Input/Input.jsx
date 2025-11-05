export const Input = ({
    label,
    type,
    placeholder,
    required,
    disabled,
    ...props})=>{
    return(
        <div>
            <label>
                {label}
            </label>
        
            <input
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
            {...props}
             />
        </div>
    )
}