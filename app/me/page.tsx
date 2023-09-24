import { getProfile } from "@/sanity/lib/sanity.query";
import type { ProfileType } from "@/types";
import { Navbar } from "@/app/components/navbar"
import { Cta } from "@/app/components/cta"
import { Services } from "@/app/components/services"
import { Projects } from "@/app/components/projects"
import { Testimonials } from "@/app/components/testimonals"
import { Contact } from "@/app/components/contact"
import { Footer } from "@/app/components/footer"

export default async function About() {
  const profile: ProfileType[] = await getProfile();
  
  return (
    <>
        <Navbar/> 
        <Cta fullName={profile.map((item)=> item.fullName)} projects={profile.map((item)=> item.projects)} /> 
        <Services/>
        <Projects/>
        <Testimonials/>
        <Contact/>
        <Footer/>
    </>
  );
}
