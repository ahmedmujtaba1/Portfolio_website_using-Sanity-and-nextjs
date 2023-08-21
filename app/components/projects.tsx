import Image from "next/image";
import Link from "next/link";
import smitCopy from "@/public/smit_copy.jpg"
import portfolio from "@/public/nlp_portfolio.jpg"

export const Projects = () => {
  return (
    <>
     <section id="projects" className="py-24 text-center">
      <div className="container">
        <div className="text-center">
          <h2 className="mb-12 section-heading wow fadeInDown" data-wow-delay="0.3s">Our Recent Projects</h2>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="max-w-sm sm:w-1/2 md:w-1/2 lg:w-1/3">
            <div className="team-item">
              <div className="team-img relative">
                <Image className="img-fluid" src={smitCopy} alt="Saylani Mass IT Training"/>
                <div className="team-overlay">
                  <ul className="flex justify-center">
                    <li className="mx-1">
                      <a href={"https://github.com/ahmedmujtaba1/Saylani_Website_Clone"} className="social-link hover:bg-black">
                        <i className="lni lni-github-original" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="mx-1">
                      <a href={"https://silver-custard-ed277f.netlify.app/"} className="social-link hover:bg-blue-400">
                        <i className="lni lni-world" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-center px-5 py-3">
                <h3 className="team-name">Saylani Mass It Training</h3>
                <p>Tailwind Css, Bootstrap</p>
              </div>
            </div>
          </div>
          <div className="max-w-sm sm:w-1/2 md:w-1/2 lg:w-1/3">
            <div className="team-item">
              <div className="team-img relative">
                <Image className="img-fluid" src={portfolio} alt="Template of Portfolio Website"/>
                <div className="team-overlay">
                  <ul className="flex justify-center">
                    <li className="mx-1">
                      <a href={"https://github.com/ahmedmujtaba1/SMIT-NLP"} className="social-link hover:bg-black">
                        <i className="lni lni-github-original" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="mx-1">
                      <a href={"https://main--fantastic-choux-44c082.netlify.app"} className="social-link hover:bg-blue-400">
                        <i className="lni lni-world" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-center px-5 py-3">
                <h3 className="team-name">Template {"(Portfolio Website)"}</h3>
                <p>Tailwind Css, Bootstrap</p>
              </div>
            </div>
          </div>
          {/* Team Item Ends*/}
          {/* Team Item Starts*/}
          <div className="max-w-sm sm:w-1/2 md:w-1/2 lg:w-1/3">
            <div className="team-item">
              <div className="team-img relative">
                <Image className="img-fluid" src={smitCopy} alt="Saylani Mass IT Training"/>
                <div className="team-overlay">
                  <ul className="flex justify-center">
                    <li className="mx-1">
                      <a href={"https://github.com/ahmedmujtaba1/Saylani_Website_Clone"} className="social-link hover:bg-black">
                        <i className="lni lni-github-original" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="mx-1">
                      <a href={"https://silver-custard-ed277f.netlify.app/"} className="social-link hover:bg-blue-400">
                        <i className="lni lni-world" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-center px-5 py-3">
                <h3 className="team-name">Saylani Mass It Training</h3>
                <p>Tailwind Css, Bootstrap</p>
              </div>
            </div>
          </div>
          {/* Team Item Ends*/}
        </div>
      </div>
    </section>
    </>
  );
};
