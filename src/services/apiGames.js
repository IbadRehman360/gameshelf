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