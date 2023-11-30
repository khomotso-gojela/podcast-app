
export default function stripArray(all) {
    const list = all.map(show => {
        const newSeasons = show.seasons.filter(item => item.fav == true);

        const seasonList = newSeasons.map(seas => {
            const episodelist = seas.episodes.filter(item => item.fav == true);

            return {
                ...seas,
                fav: episodelist.some(item => item.fav === true),
                episodes: episodelist
            };
        });

        const haveFavs = seasonList.some(item => item.fav === true)

        return {
            ...show,
            fav: haveFavs,
            seasons: seasonList
        };
    });

    const newlist = list.filter(item => item.fav === true)

    return newlist;
}
