import { type SchemaTypeDefinition } from 'sanity'
import { defineField } from "sanity";
import { BiUser } from "react-icons/bi";

const profile = {
  name: "profile",
  title: "Profile",
  type: "document",
  icon: BiUser,
  fields: [
    defineField({
      name: "fullName",
      title: "Full Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
      description: "In one short sentence, what do you do?",
      validation: (Rule) => Rule.required().min(10).max(100),
    }),
    defineField({
      name: "headline2",
      title: "Headline no 2",
      type: "string",
      description: "In one short sentence, what do you do?",
      validation: (Rule) => Rule.required().min(10).max(100),
    }),
    defineField({
      name: "headline3",
      title: "Headline no 3",
      type: "string",
      description: "In one short sentence, what do you do?",
      validation: (Rule) => Rule.required().min(10).max(100),
    }),
    {
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      description: "Upload a profile picture",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "shortBio",
      title: "Short Bio",
      type: "text",
      rows: 4,
    },
    {
      name: "email",
      title: "Email Address",
      type: "string",
    },
    {
      name: "experience",
      title: "What's your experience",
      type: "number",
    },
    {
      name: "projects",
      title: "What's your number of projects you have done",
      type: "number",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "fullBio",
      title: "Full Bio",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "resumeURL",
      title: "Upload Resume",
      type: "file",
    },
    {
      name: "socialLinks",
      title: "Social Links",
      type: "object",
      description: "Add your social media links:",
      fields: [
        {
          name: "github",
          title: "Github URL",
          type: "url",
          initialValue: "https://github.com/",
        },
        {
          name: "linkedin",
          title: "Linkedin URL",
          type: "url",
          initialValue: "https://linkedin.com/in/",
        },
        {
          name: "twitter",
          title: "Twitter URL",
          type: "url",
          initialValue: "https://twitter.com/",
        },
        {
          name: "facebook",
          title: "Facebook URL",
          type: "url",
          initialValue: "https://facebook.com/",
        },
      ],
      options: {
        collapsed: false,
        collapsible: true,
        columns: 2,
      },
    },
    {
      name: "skills",
      title: "Skills",
      type: "array",
      description: "Add a list of skills",
      of: [{ type: "string" }],
    },
 ],
};


const services = {
  name: "services",
  title: "Services",
  type: "document",
  fields: [
    defineField({
      name: "fontAwesomeClass",
      title: "Font Awesome Class",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required().min(10).max(500),
    }),
  ],
};

const projects = {
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      description: "Upload an image for the project",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "githubRepo",
      title: "GitHub Repository URL",
      type: "url",
      initialValue: "https://github.com/",
      validation: (rule) => rule.uri({ scheme: ["http", "https"] }).required(),
    }),
    defineField({
      name: "hostedURL",
      title: "Hosted URL",
      type: "url",
      initialValue: "https://example.com/",
      validation: (rule) => rule.uri({ scheme: ["http", "https"] }).required(),
    }),
    defineField({
      name: "techniques",
      title: "Techniques or Languages Used",
      type: "array",
      description: "Add a list of techniques or languages used",
      of: [{ type: "string" }],
      validation: (rule) => rule.min(1),
    }),
  ],
};

export default projects;


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [profile, services, projects],
}
