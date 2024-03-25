import Image from "next/image";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import SectionHeading from "./SectionHeading";

interface PortfolioProps {
  data: ServiceData[];
}

export interface ServiceData {
  title: string;
  heading: string;
  imgLink: string;
  text: string;
  trigger: string;
}

export default function Portfolio({ data }: PortfolioProps) {
  return (
    <section id="work" className="section services-section bg-dark">
      <div className="container">
        <SectionHeading title="My Specialties" subTitle="My Work" />
        <div className="accordion accordion-flush" id="accordion_services">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="row gy-5 lightbox-gallery"
          >
            <Accordion
              type="single"
              collapsible
              defaultValue={data[0].trigger}
              className="w-full"
            >
              {data.map((element, index) => (
                <AccordionItem value={element.trigger} key={index}>
                  <div className="w-full">
                    <AccordionTrigger className="pr-2">
                      <span className="uppercase">{element.title}</span>

                      <span className="hidden xl:block text-base	 font-light text-left ">
                        {element.heading}
                      </span>
                    </AccordionTrigger>
                  </div>
                  <AccordionContent className="accordion-body">
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
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
