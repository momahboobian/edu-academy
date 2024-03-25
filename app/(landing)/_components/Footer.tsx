import Image from "next/image";

interface FooterProps {
  data: {
    ImgLink: string;
    name: string;
  };
}

export default function Footer({ data }: FooterProps) {
  const { ImgLink, name } = data;
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-info">
          <div className="footer-avatar">
            <Image
              src={ImgLink}
              width={300}
              height={200}
              alt="copyright logo"
            />
          </div>
          <h6>{name}</h6>
        </div>
        <p className="copyright">
          © {currentYear} copyright all right reserved
        </p>
      </div>
    </footer>
  );
}
