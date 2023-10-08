import supabase from "./supabase";

export async function storeBanners(file, userId, params, image_col) {
    const fileName = `${file.name}-${Math.random()}`.replaceAll("/", "");
    const newImage = `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/${params}/${fileName}`;
    const { error: storageError } = await supabase.storage
        .from(params)
        .upload(fileName, file);

    if (storageError) {
        console.error(`Error uploading ${params} image:`, storageError.message);
        return [null, storageError];
    }

    const { data, error: updatingImage } = await supabase
        .from("users")
        .update({ [image_col]: newImage })
        .eq("id", userId);

    if (updatingImage) {
        console.error(`Error updating ${params} image to user:`, updatingImage.message);
        return [null, updatingImage];
    }

    return [data, null];
}
