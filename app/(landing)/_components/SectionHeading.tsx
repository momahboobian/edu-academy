interface SectionHeadingProps {
  title: string;
  subTitle: string;
}

export default function SectionHeading({
  title,
  subTitle,
}: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <h6 data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
        {subTitle}
      </h6>
      <h2 data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
        {title}
      </h2>
    </div>
  );
}
