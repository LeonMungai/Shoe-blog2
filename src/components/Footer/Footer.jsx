
import {
  Facebook,
  Twitter,
  MessageCircleHeart,
  Instagram,
  CircleFadingPlus,
} from "lucide-react";

const Footer = () => (
  <div>
    <nav>
      <h2 className="flex gap-4 justify-items-center m-20">
        <a target="_blank" href="https://facebook.com" className="border border-black rounded-full p-1 w-7 h-7 flex items-center text-black">
          <Facebook />
        </a>
        <a target="_blank" href="https://twitter.com"
        className="border border-black rounded-full p-1 w-7 h-7 flex items-center text-black"
        >
          <Twitter />
        </a>
        <a target="_blank" href="https://pinterest.com"
        className="border border-black rounded-full p-1 w-7 h-7 flex items-center text-black"
        >
          <MessageCircleHeart />
        </a>
        <a target="_blank" href="https://instagram.com"
        className="border border-black rounded-full p-1 w-7 h-7 flex items-center text-black">
          <Instagram />
        </a>
        <a className="border border-black rounded-full p-1 w-7 h-7 flex items-center text-black">
          <CircleFadingPlus />
        </a>
      </h2>
    </nav>
  </div>
);

export default Footer;
