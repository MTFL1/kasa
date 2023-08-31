import "./title.scss"

function HousingTitle(props) {
    return (
        <div className="Housetitle">
            <h1>{props.title}</h1>
            <h2>{props.location}</h2>
        </div>
    )
}

export default HousingTitle