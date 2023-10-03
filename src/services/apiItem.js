import supabase from "../services/supabase";

export const createItem = async (values, user) => {
    const { data: updatedData, error } = await supabase.from("items").upsert([
        {
            title: values.title,
            price: values.price,
            description: values.description,
            stock: values.stock,
            images: values.images[0].name,
            options: values.options,
            seller_id: user.id,
            category_id: values.serviceId,
            game_id: values.gameId,
        },
    ]);

    if (error) {
        console.log("error on creating new item: ", error);
        throw new Error("error creating new item: " + error.message);
    }

    if (updatedData) {
        console.log(updatedData);
    }

    return [updatedData, error];
};

export async function getItem(orderBy, orderDirection) {
    const { data: items, error } = await supabase
        .from("items")
        .select(
            `*,
          users (
            *
          ),
          games (
            *
          )
        `
        )
        .order(orderBy, { ascending: orderDirection === "asc" });

    if (error) {
        console.error("Error fetching item:", error.message);
        throw new Error("Error fetching item: " + error.message);
    }
    if (items) {
        console.log(items);
    }
    return [items, error];
}


export async function getCategoryItems(gameId) {
    let { data: games, error } = await supabase
        .from('items')
        .select(`*, game_id(*), seller_id(*)`)
        .eq('game_id', gameId);

    if (error) {
        console.log("error getting games: " + error.message);
        throw new Error("error getting games: " + error.message);
    }

    return games;
}
export async function getUserItems(id) {
    let { data: games, error } = await supabase
        .from('items')
        .select(`*, game_id(*), seller_id(*), category_id(*)`)
        .eq('id', id);

    if (error) {
        console.log("error getting games: " + error.message);
        throw new Error("error getting games: " + error.message);
    }

    return games;
}
