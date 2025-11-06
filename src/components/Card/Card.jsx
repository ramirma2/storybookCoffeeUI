

export const Card = ({image, title, description, price}) => {
    return(
        <div className="card">
            <img src={image} alt={` Image of ${title}`} />
            <div className="card-header">
                <h3>{title}</h3>
                <p>${price}</p>
            </div>
            <p>- {description}</p>
        </div>
    );
};

