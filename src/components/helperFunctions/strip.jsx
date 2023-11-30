
export default function Strip(show) {
   
    const list = []
    show.seasons.map(seas => {
       
        const favEpisodes = seas.episodes.filter(item => item.fav === true);

        list.push({
            ...seas,
            fav: favEpisodes.length > 0,
            episodes: favEpisodes
        })

        return {
            ...seas,
            fav: favEpisodes.length > 0,
            episodes: favEpisodes
        };
    });

    
    const newSeasons = list.filter(item => item.fav === true);

    const haveFavs = list.some(item => item.fav === true);

    return {
        ...show,
        fav: haveFavs,
        seasons: newSeasons
    };


}
