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
  console.log("profile  : ", profile);
  

  return (
    <>
        <Navbar fullName={profile.map((item)=> item.fullName)} socialLinks={profile.map((item)=> item.socialLinks)}/>
        <Cta fullName={profile.map((item)=> item.fullName)} projects={profile.map((item)=> item.projects)} experience={profile.map((item)=> item.experience)} headline1={profile.map((item)=> item.headline)} headline2={profile.map((item)=> item.headline2)} headline3={profile.map((item)=> item.headline3)} shortBio={profile.map((item)=> item.shortBio)} /> 
        <Services  />
        <Projects/>
        <Testimonials/>
        <Contact/>
        <Footer/>
    </>
  );
}
