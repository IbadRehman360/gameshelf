import supabase from "../services/supabase";


export async function getGames() {
    let { data: games, error } = await supabase
        .from('games')
        .select("*")
    if (error) {
        console.log("error getting games" + error)
        throw new Error("error getting games" + error)
    }

    return [games, error]
}


export async function getOffers() {


    let { data, error } = await supabase
        .from('items')
        .select(`*, game_id(*)`)

    if (error) {
        console.log("error getting games" + error)
        console.log("error getting games offers length" + error)
        throw new Error("error getting games" + error)

    }

    return [data, error]
}
