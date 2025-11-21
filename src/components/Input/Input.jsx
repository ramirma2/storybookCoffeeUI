export const Input = ({
    label,
    type,
    placeholder,
    required,
    disabled,
    error,
    ...props})=> {

    let inputClassName = "input";
    if(disabled){
        inputClassName += " disabled";
    }
    if(error){
        inputClassName += " error"; // Add error styling class
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
            aria-label={label}
            aria-invalid={!!error}
            aria-describedby={error ? "error-message" : undefined}
            {...props}
             />
             <div>
            {error && (
                <p id="error-message" className="error-message">
                    {error}
                </p>
            )}
             </div>
        </div>
    )
}