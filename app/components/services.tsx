import type { ServicesType } from "@/types";
import { getServices } from "@/sanity/lib/sanity.query";

export const Services = async () => {
  const services: ServicesType[] = await getServices();
  // console.log(services);

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
            {services.map((service, id) => (
              <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3">
                <div className="m-4 wow fadeInRight" data-wow-delay="0.3s">
                  <div className="icon text-5xl">
                    <i className={service.fontAwesomeClass}></i>
                  </div>
                  <div>
                    <h3 className="service-title">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
