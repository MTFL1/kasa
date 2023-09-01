import "./rating.scss";
import redStar from "../../assets/images/star-active.png"
import greyStar from "../../assets/images/star-inactive.png"

function Rating({stars}) {

    const displayRedStar = () => {
        const rate = []
        for (let i = 0; i < stars; i++) {
            rate.push(<img src={redStar} alt="Etoile rouge" key={i}/>)
        }
        return rate
    }

    const displayGreyStar = () => {
        const numberGreyStar = 5 - stars
        const rate = []

        for (let i = 0; i < numberGreyStar; i++) {
            rate.push(<img src={greyStar} alt="Etoile grise" key={i}/>)
        }
        return rate
    }

    return (
        <div className="rating">
            {displayRedStar()}
            {displayGreyStar()}
        </div>
    )
}

export default Rating