export const Input = ({
    label,
    type,
    placeholder,
    required,
    disabled,
    error,
    ...props})=> {

    let inputClassName = "input";
    if(error){
        inputClassName +=" input-error";
    }else if(disabled){
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
            {...props}
             />
             <div>
                {error && <span className="error-message">This field is required.</span>}
             </div>
        </div>
    )
}