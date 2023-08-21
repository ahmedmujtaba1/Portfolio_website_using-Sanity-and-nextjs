import Image from "next/image";
import Link from "next/link";

export const Services = () => {
  return (
    <>
      <section id="services" className="py-24">
        <div className="container">
          <div className="text-center">
            <h2
              className="mb-12 section-heading wow fadeInDown"
              data-wow-delay="0.3s"
            >
              Our Services
            </h2>
          </div>
          <div className="flex flex-wrap">
            {/* Services item  */}
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3">
              <div className="m-4 wow fadeInRight" data-wow-delay="0.3s">
                <div className="icon text-5xl">
                    <i className="fa-solid fa-code"></i>
                </div>
                <div>
                  <h3 className="service-title">Full Dynamic Website Development</h3>
                  <p className="text-gray-600">
                    I can design you static and dynamic with api and proper datasets and database. I have done 12+ projects on this.
                  </p>
                </div>
              </div>
            </div>
            {/* Services item  */}
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3">
              <div className="m-4 wow fadeInRight" data-wow-delay="0.6s">
                <div className="icon text-5xl">
                  <i className="lni lni-bar-chart"></i>
                </div>
                <div>
                  <h3 className="service-title">Graphic Design</h3>
                  <p className="text-gray-600">
                  I can design you 300dpi Print Graphics, Billboard, Banner, Vehicle Wrap, Vending Machine, Etc. I use Adobe Illustrator, Photoshop & Canva
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3">
              <div className="m-4 wow fadeInRight" data-wow-delay="0.9s">
                <div className="icon text-6xl">
                    <i className="lni lni-website"></i>
                </div>
                <div>
                  <h3 className="service-title">Website Scraping</h3>
                  <p className="text-gray-600">
                    I can scrape any website data from any social media, eCommerce website and etc. I can save data into google sheets. I have experience of 2+ yrs.
                  </p>
                </div>
              </div>
            </div>
            {/* Services item  */}
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3">
              <div className="m-4 wow fadeInRight" data-wow-delay="1.2s">
                <div className="icon text-5xl">
                    <i className="lni lni-pencil"></i>
                </div>
                <div>
                  <h3 className="service-title">Content Writing</h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Unde perspiciatis dicta labore nulla beatae quaerat quia
                    incidunt laborum aspernatur...
                  </p>
                </div>
              </div>
            </div>
            {/* Services item  */}
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3">
              <div className="m-4 wow fadeInRight" data-wow-delay="1.8s">
                <div className="icon text-5xl">
                  <i className="lni lni-world"></i>
                </div>
                <div>
                  <h3 className="service-title">Automation Bots</h3>
                  <p className="text-gray-600">
                    I can automate your daily tasks within a few minutes. I can help you make profit in tarding or bots for visa booking and etc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
