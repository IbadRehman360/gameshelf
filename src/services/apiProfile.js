import supabase from "../services/supabase";

export async function getProfileData(user) {
    const { data: userData, error: userError } = await supabase
        .from("users")
        .select("*")
        .eq("username", user);

    if (userError) {
        return { data: null, error: userError };
    }

    const { data: itemsData, error: itemsError } = await supabase
        .from("items")
        .select("*")
        .eq("seller_id", userData[0].id);

    if (itemsError) {
        return { data: null, error: itemsError };
    }

    return {
        data: {
            ...userData[0],
            items: itemsData,
        },
        error: null,
    };
}