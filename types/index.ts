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
  facebook: string,
  github:string,
  linkedin:string,
  twitter:string,
  socialLinks: {
    github : string,
    facebook : string,
    linkedin : string,
    twitter : string,
  },
  skills: string[],
};


