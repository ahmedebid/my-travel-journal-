import mapIcon from "../images/map-icon.svg";

export default function Card(props) {
    return (
        <div className="card">
            <div className="card-img" style={{backgroundImage: `url(${props.item.imageUrl})`}}>
            </div>

            <div className="card-content">
                <p className="location">
                    <img src={mapIcon} />
                    <span className="country">{props.item.location}</span>
                    <a className="google-maps-link" href={props.item.googleMapsUrl} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                </p>
                <h2 className="journey-title">{props.item.title}</h2>
                <h3 className="journey-dates">{props.item.startDate} - {props.item.endDate}</h3>
                <p>{props.item.description}</p>
            </div>
        </div>
    )
}