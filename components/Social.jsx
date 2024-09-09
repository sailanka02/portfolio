import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/sailanka02" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/sai-lanka-b78b76196/" },
  { icon: <FaYoutube />, path: "" },
  { icon: <BiLogoGmail />, path: "mailto:saip.lanka02@gmail.com" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
