

export default function Dheader(props) {
    return (
        <div className='d-header'>
            
            <img className="dh-image" src={props.show? props.show.image : 'loading...'} alt="" />
            
            <div className="dh-text">
                <h2>{props.show? props.show.title : 'loading...'}</h2>
                <h4>{props.show? props.show.genres : 'loading...'}</h4>
            </div>
            
        </div>
    )
}