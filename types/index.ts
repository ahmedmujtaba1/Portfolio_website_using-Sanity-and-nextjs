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

export type ServicesType = {
  _id: string;
  fontAwesomeClass: string;
  title: string;
  description: string;
};

export type ProjectsType = {
  _id: string;
  title: string;
  image: {
    alt: string;
    image: string;
  };
  githubRepo: string;
  hostedURL: string;
  techniques: string[];
};

