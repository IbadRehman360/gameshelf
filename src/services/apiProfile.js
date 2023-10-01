import supabase from "../services/supabase";

import { useEffect, useState } from "react";

export function useGetProfile(user) {
    const [profileData, setProfileData] = useState({});
    const [error, setError] = useState("");

    useEffect(() => {
        async function getProfileData() {
            const { data: userData, error: userError } = await supabase
                .from("users")
                .select("*")
                .eq("username", user);

            if (userError) {
                setError(userError);
                return;
            }

            if (!userData[0]?.id) {
                setProfileData({ none: true });
                return;
            }

            const { data: itemsData, error: itemsError } = await supabase
                .from("items")
                .select("*")
                .eq("seller_id", userData[0].id);

            if (itemsError) {
                setError(itemsError);
                return;
            }

            setProfileData({
                ...userData[0],
                items: itemsData,
            });
        }

        getProfileData();
    }, [user]);
    return [profileData, error];
}
