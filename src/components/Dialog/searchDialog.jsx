

export default function SearchDialog() {

    const genres = [	
        'All',
        'Personal Growth',
        'True Crime and Investigative Journalism',
        'History',
        'Comedy',
        'Entertainment',
        'Business',
        'Fiction',
        'News',
        'Kids and Family'
    ]
    
    return (
        <dialog className="searchDialog" open={false}>
            <label htmlFor="title">Title</label>
            <br />
            <input 
                placeholder="search show"
                type="text"
               
            />
            <br />
            <label htmlFor="genres">Genre: </label>
            <select name="genres" id="genres">
                {genres.map((gen,ind) => <option key={ind} >{gen}</option>)}
            </select>
        </dialog>
    )
}