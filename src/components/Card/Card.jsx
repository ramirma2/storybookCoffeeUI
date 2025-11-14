import './Card.css'


export const Card = ({image, title, description, price}) => {
    const truncated_description = description.length > 65 ? description.slice(0, 65)+"..." : description; 
    return(
        <article className="card">
            <img src={image} alt={` ${title}- ${description}`} />
            <div className="card-header">
                <h3>{title}</h3>
                <p>${price}</p>
            </div>
            <p> {truncated_description}</p>
        </article>
    );
};

