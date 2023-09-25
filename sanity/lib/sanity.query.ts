import { groq } from "next-sanity";
import client from "./client";

export async function getProfile() {
  return client.fetch(
    groq`*[_type == "profile"]{
      _id,
      fullName,
      headline,
      headline2,
      headline3,
      projects,
      experience,
      profileImage {alt, "image": asset->url},
      shortBio,
      location,
      fullBio,
      email,
      "resumeURL": resumeURL.asset->url,
      socialLinks,
      skills
    }`
  );
}

export async function getServices() {
  return client.fetch(
    groq`*[_type == "services"]{
      _id,
      fontAwesomeClass,
      title,
      description
    }`
  );
}

export async function getProjects() {
  return client.fetch(
    groq`*[_type == "projects"]{
      _id,
      title,
      image {alt, "image": asset->url},
      githubRepo,
      hostedURL,
      techniques
    }`
  );
}

