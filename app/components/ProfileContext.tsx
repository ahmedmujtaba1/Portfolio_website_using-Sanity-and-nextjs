import { getProfile } from "@/sanity/lib/sanity.query";
import type { ProfileType } from "@/types";

export async function fetchProfileData(): Promise<ProfileType[]> {
    const profileData: ProfileType[] = await getProfile();
    return profileData;
  }
  
