import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

import Logo from "../../../components/Logo";

// import { socialData } from "../data.json";

interface HeaderProps {
  data: {
    logoDark: string;
    logoLight: string;
  };
}

const socialData = [
  {
    icon: "twitter",
    link: "https://twitter.com/bolourtour",
  },
  {
    icon: "instagram",
    link: "https://www.instagram.com/behzadbolour",
  },
  {
    icon: "facebook",
    link: "https://www.facebook.com/bolour/",
  },
  {
    icon: "youtube",
    link: "https://www.youtube.com/@behzad.bolour",
  },
];

export default function Header({ data }: HeaderProps) {
  const { logoDark, logoLight } = data;

  const [mobileToggle, setMobileToggle] = useState(false);

  const handleMobileToggle = () => {
    setMobileToggle(!mobileToggle);
  };

  return (
    <header>
      {/* Mob header */}
      <div className="mob-header" onClick={handleMobileToggle}>
        <div className="mob-h-left">
          <Link href="/">
            <div className="navbar-brand">
              <Logo size={180} invert="1" color="#fff" />
              {/* 
              <Image src={logoDark} width={100} height={50} alt="logo" />
              <Image src={logoLight} width={100} height={50} alt="logo" /> */}
            </div>
          </Link>
        </div>
        <div className="mob-h-right">
          <button className="toggler-menu">
            <span />
          </button>
        </div>
      </div>
      {/* End */}
      {/* Header Top */}
      <div
        className={`header-left-fixed one-page-nav ${
          mobileToggle ? "menu-open" : ""
        }`}
      >
        {/* Brand */}
        <div className="logo">
          <Link href="/">
            <Logo size={180} invert="1" color="#fff" />
          </Link>
        </div>
        {/* / */}
        <ul className="main-menu">
          <li>
            <ScrollLink
              to="home"
              spy={true}
              duration={500}
              onClick={() => setMobileToggle(false)}
            >
              Home
            </ScrollLink>
          </li>

          <li>
            <ScrollLink
              to="about"
              spy={true}
              duration={500}
              onClick={() => setMobileToggle(false)}
            >
              About
            </ScrollLink>
          </li>

          <li>
            <ScrollLink
              to="work"
              spy={true}
              duration={500}
              onClick={() => setMobileToggle(false)}
            >
              Portfolio
            </ScrollLink>
          </li>

          <li>
            <ScrollLink
              to="courses"
              spy={true}
              duration={500}
              onClick={() => setMobileToggle(false)}
            >
              Courses
            </ScrollLink>
          </li>

          <li>
            <ScrollLink
              to="blog"
              spy={true}
              duration={500}
              onClick={() => setMobileToggle(false)}
            >
              Blog
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              spy={true}
              duration={500}
              onClick={() => setMobileToggle(false)}
            >
              Contact
            </ScrollLink>
          </li>
        </ul>
        <ul className="social-link flex">
          {socialData.map((element, index) => (
            <li key={index}>
              <a href={element.link} target="_blank" rel="noopener noreferrer">
                <Icon icon={`fa6-brands:${element.icon}`} />
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* End Header Top */}
    </header>
  );
}
