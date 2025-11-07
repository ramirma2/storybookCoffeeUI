export const Input = ({
    label,
    type,
    placeholder,
    required,
    disabled,
    error,
    ...props})=> {

    let inputClassName = "input";
    let idError = "required-field";
    if(disabled){
        inputClassName +=" disabled";
    }
    return(
        <div className={inputClassName}>
            <label>
                {label}
            </label>
        
            <input
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
            aria-invalid={!!error}
            aria-describedby={error ? idError : undefined}
            {...props}
             />
             <div>
                {error && <p id={idError} className="error-message">This field is required.</p>}
             </div>
        </div>
    )
}