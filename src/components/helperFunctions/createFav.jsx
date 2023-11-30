import { supabase } from "../../superbase/client"

async function delData(id) {
    const { error } = await supabase
        .from('favourates')
        .delete()
        .eq('id', id)
                

    if (error) {
        console.log(error.message);
    }

//     if (data) {
//         console.log(data);
//     }
}

async function insertData(list) {
    const { data, error } = await supabase
        .from('favourates')
        .upsert(list, { onConflict: ['id'] })
        .select();

    if (error) {
        // console.log(error.message);
    }

    if (data) {
        // console.log(data);
    }
}


export default function createFav(all) {
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

    all.map(show => {delData(show.id)})


    // then Insert new table after deletion
    insertData(newlist);

    return newlist;
}
