import supabase from "../services/supabase";

export async function getGames(gameId) {
    let { data: games, error } = await supabase
        .from('items')
        .select(`game_id(*), seller_id(*)`)
        .eq('game_id', gameId); // Use the correct column name

    if (error) {
        console.log("error getting games: " + error.message);
        throw new Error("error getting games: " + error.message);
    }

    return games;
}
