

export default function createFav(all) {
    console.log(all)
    const list = all.map(show => {
        const newSeasons = show.seasons.filter(item => item.fav == true)
        const seasonList = newSeasons.map(seas => {
            const list = seas.episodes.filter(item => item.fav == true)

            return {
                ...seas,
                episodes:list
            }
        })

        const haveFavs = seasonList.some(item => item.fav === true)

        return {
            ...show,
            fav:haveFavs,
            seasons:seasonList
        }
    })

    const newlist = list.filter(item => item.fav == true)

    return newlist


}