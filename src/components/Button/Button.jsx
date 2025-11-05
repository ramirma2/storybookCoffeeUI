

export const Button = ({variant, size, ...props}) => {
    let className ="button";
    if(variant ==="secondary"){
        className +=" button-secondary";
    }else if(variant ==="outline"){
        className +=" button-outline";
    } else if(variant ==="destructive"){
        className +=" button-destructive";
    } 
    if( size ==="small"){
        className +=" button-sm";
    }else if(size ==="medium"){
        className +=" button-md";
    } else if(size ==="large"){
        className +=" button-lg";
    }
    return(
        <button 
        className={className}
        {...props}>
            {props.children}
        </button>
    );
}