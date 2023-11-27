

export default function Episode(props) {
    return (
        <div className="e-container">
            <div onClick={() => props.play(props.epi)}>
                Play
            </div>

            <div>
                {props.epi.title}
            </div>
            
            <button className="star" onClick={() => props.setFav()}>
                {props.epi.fav? 'Star' : 'noStar'}
            </button>

        </div>
    )
}