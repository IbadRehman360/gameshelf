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
export async function updateDescription(id, newDescription) {
    const { data, error } = await supabase
        .from("users")
        .update({ description: newDescription })
        .eq("id", id);
    if (error) {
        console.log(error)
    }
    if (data) {
        console.log(data)
    }
    return [data, error];

}
export async function updateLanguage(id, languages) {
    console.log(languages.second)
    const { data, error } = await supabase
        .from("users")
        .update({
            first_language: languages.first,
            second_language: languages.second,
            third_language: languages.third,
        })
        .eq("id", id);

    if (error) {
        console.error(error);
        return [null, error];
    }


    return [data, error];
}