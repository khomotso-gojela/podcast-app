

export default function Episode(props) {
    return (
        <div className="e-container">
            <div>
                Play
            </div>
            <div>
                {props.title}
            </div>
            <button className="star" onClick={props.setFav}>
                Star
            </button>

        </div>
    )
}