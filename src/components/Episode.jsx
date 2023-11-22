

export default function Episode(props) {
    return (
        <div className="e-container">
            <div>
                Play
            </div>
            <div>
                {props.title}
            </div>
            <div onClick={props.setFav}>
                Star
            </div>

        </div>
    )
}