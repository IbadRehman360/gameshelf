import supabase from "../../../services/supabase";

import { useEffect, useState } from 'react'

export default function useGetProfile(user) {
  const [profileData, setProfileData] = useState({});
  const [error, setError] = useState("");

useEffect(()=> {
    async function getProfileData(){
        const {data: userData, error} = await supabase.from("users").select('*').eq("username", user);
        if(!userData[0]?.username){
            setProfileData({none: true});
        }else{
            setProfileData(userData[0]);
        }
        if(error){
            setError(error);
        }   
    }
    getProfileData();
},[])

  return [profileData, error]
}
