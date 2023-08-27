import type { ProfileType } from "@/types";
import {fetchProfileData}  from "./ProfileContext"
import React, { useEffect, useState } from "react";

export const dataIs = () => {
    const [profile, setProfile] = React.useState<ProfileType[]>([]);
     useEffect(() => {
    async function fetchData() {
      try {
        const profileData = await fetchProfileData();
        setProfile(profileData);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    }

    fetchData();
  }, []);
  
}