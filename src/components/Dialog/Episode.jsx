import nostar from '../../assets/nostar.png'
import star from '../../assets/star.png'
import play from '../../assets/play.png'

export default function Episode(props) {
    return (
        <div className="e-container">
            <div onClick={() => props.play(props.epi)}>
                <img src={play} width={'50%'}/>
            </div>

            <div>
                {props.epi.title}
            </div>
            
            <button className="star" onClick={() => props.setFav()}>
                {props.epi.fav? <img src={star} width={'100%'}/> : <img src={nostar} width={'100%'}/>}
            </button>

        </div>
    )
}