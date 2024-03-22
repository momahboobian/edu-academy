import Image from "next/image";
import SectionHeading from "./SectionHeading";

interface ServiceProps {
  data: ServiceData[];
}

export interface ServiceData {
  title: string;
  heading: string;
  imgLink: string;
  text: string;
  trigger: string;
}

export default function Service({ data }: ServiceProps) {
  return (
    <section id="services" className="section services-section bg-dark">
      <div className="container">
        <SectionHeading title="My Specialties" subTitle="My Service" />
        <div className="accordion accordion-flush" id="accordion_services">
          {data.map((element, index) => (
            <div
              className="accordion-item"
              key={index}
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <div className="accordion-header">
                <button
                  className={`accordion-button ${
                    element.trigger !== "One" ? "collapsed" : ""
                  }`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#${element.trigger}`}
                  aria-expanded={`${!!element.trigger ? "true" : "false"}`}
                  aria-controls={`${element.trigger}`}
                >
                  <span className="services-title">{element.title}</span>
                  <span className="services-small-desc">{element.heading}</span>
                  <span className="accordion-icon" />
                </button>
              </div>
              <div
                id={`${element.trigger}`}
                className={`accordion-collapse collapse ${
                  element.trigger === "One" ? "show" : ""
                }`}
                data-bs-parent="#accordion_services"
              >
                <div className="accordion-body">
                  <div className="row gy-4">
                    <div className="col-sm-6 col-md-4">
                      <div className="s-img">
                        <Image
                          src={element.imgLink}
                          width={300}
                          height={200}
                          alt={`Service Image - ${element.title}`}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-8">
                      <h3>{element.title}</h3>
                      <div className="s-text">{element.text}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
