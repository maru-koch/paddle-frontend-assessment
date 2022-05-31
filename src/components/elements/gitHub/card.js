
import './card.css'

const Card =(props)=>{
    return (
        <div className = {`card ${props.style}`}>
            {props.children}
        </div>
    )
}

// ${props.class} allows you to add additional css class from the parent component;
// this enables you to customize the card as suitable

export default Card