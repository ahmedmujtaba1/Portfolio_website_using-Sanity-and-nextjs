import { PortableTextBlock } from "sanity";

export type ProfileType = {
  _id: string,
  fullName: string,
  headline: string,
  headline2: string,
  headline3: string,
  profileImage: {
    alt: string,
    image: string
  },
  shortBio: string,
  email: string,
  projects: number,
  experience: number,
  fullBio: PortableTextBlock[],
  location: string,
  resumeURL: string,
  socialLinks: string[],
  skills: string[],
};


