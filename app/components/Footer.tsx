import Link from "next/link";
import { BsInstagram, BsDiscord, BsGithub } from "react-icons/bs";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg_primary text-white py-6">
      <div className="flex justify-between items-center mx-14 text-center">
        <p>
          &copy; {new Date().getFullYear()} Brogrammer. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link href={"instgram.com"}>
            <BsInstagram className="w-6 h-6" />
          </Link>

          <Link href={"discord.com"}>
            <BsDiscord className="w-6 h-6" />
          </Link>
          <Link href={"github.com"}>
            <BsGithub className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
