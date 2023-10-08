import supabase from "../services/supabase";



export async function uploadImageToStorage(file) {
    try {
        const Paramfile = file.file
        const userId = file.userId
        const values = file.values
        const fileName = file.fileName
        const uploadfileName = `${fileName}-${Math.random()}`.replaceAll("/", "");
        const newImage = `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/item_images/${uploadfileName}`;

        const { data: uploadData, error: uploadError } = await supabase.storage.from("item_images").upload(uploadfileName, Paramfile);

        if (uploadError) {
            throw uploadError;
        }

        await createItem(values, userId, newImage);

        return newImage;
    } catch (error) {
        console.error("Error uploading image to storage:", error);
        throw error;
    }
}

export const createItem = async (values, user, newImage) => {
    console.log(values)
    try {
        const itemData = {
            title: values.title,
            price: values.price,
            description: values.description,
            stock: values.stock,
            options: values.options,
            seller_id: user,
            category_id: values.serviceId,
            game_id: values.gameId,
        };
        if (newImage) {
            itemData.images = [newImage];
        } else if (values.images.length > 0) {
            itemData.images = [values.images[0].name];
        }

        const { data: updatedData, error } = await supabase.from("items").upsert([itemData]);

        if (error) {
            console.error("Error creating new item:", error);
            throw error;
        }

        if (updatedData) {
            console.log("New item created:", updatedData);
        }

        return [updatedData, error];
    } catch (error) {
        console.error("Error creating new item:", error);
        throw error;
    }
};

export async function getItem(orderBy, orderDirection) {
    const { data: items, error } = await supabase
        .from("items")
        .select("*, users(*), games(*)") // Fetch only necessary fields
        .order(orderBy, { ascending: orderDirection === "asc" });

    if (error) {
        console.error("Error fetching item:", error.message);
        throw new Error("Error fetching item: " + error.message);
    }

    return items;
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
export async function getUpdateDescription(id) {
    let { data: games, error } = await supabase
        .from('items')
        .select(`*`)
        .eq('id', id);

    if (error) {
        console.log("error getting games: " + error.message);
        throw new Error("error getting games: " + error.message);
    }

    return games;
}

export async function getUserInfo(userId) {
    let { data: games, error } = await supabase
        .from('users')
        .select(`*`)
        .eq('id', userId);

    if (error) {
        console.log("error getting games: " + error.message);
        throw new Error("error getting games: " + error.message);
    }
    return games;
}
export async function updateBuyerCoins(buyerID, updatedBuyerCoin) {
    try {
        const { data, error } = await supabase
            .from("users")
            .update({ coin: updatedBuyerCoin })
            .eq("id", buyerID);

        if (error) {
            throw new Error("Error updating buyer's coins: " + error.message);
        }

        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function deletePurchasedProduct(sellerProductId) {
    console.log(sellerProductId)
    try {
        const { data, error } = await supabase
            .from("items")
            .delete()
            .eq("id", sellerProductId);

        if (error) {
            throw new Error("Error deleting purchased product: " + error.message);
        }

        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}
