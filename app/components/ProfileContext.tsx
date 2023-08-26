import { getProfile } from "@/sanity/lib/sanity.query";
import type { ProfileType } from "@/types";

export async function fetchProfileData(): Promise<ProfileType[]> {
    const profileData: ProfileType[] = await getProfile();
    return profileData;
  }

// export function fetchProfileData(): Promise<ProfileType[]> {
//   return getProfile()
//     .then((profileData) => {
//       return profileData;
//     })
//     .catch((error) => {
//       console.error('Error fetching profile data:', error);
//       return []; // Return an empty array or handle the error as needed
//     });
// }
  
