import { useState, useEffect } from "react";
import type { ProfileType } from "@/types";
// import {fetchProfileData}  from "./ProfileContext"
import { getProfile } from "@/sanity/lib/sanity.query";

function useProfileData() {
    const [profile, setProfile] = useState<ProfileType[]>([]);
  
    useEffect(() => {
      async function fetchData() {
        try {
          const profileData = await getProfile();
          setProfile(profileData);
        } catch (error) {
          console.error('Error fetching profile data:', error);
        }
      }
  
      fetchData();
    }, []);
  
    return profile;
  }
  
  export default useProfileData;
  