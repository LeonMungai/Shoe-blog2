import { PhoneCall } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="text-lime-600">
      <p>
        <h1>Contact Us</h1>
        <a href="" className="text-lime-800">
          <PhoneCall />
          <hr />
        </a>
        Talk to us through <strong className="text-black">+254 713199 032</strong>
      </p>
    </div>
  );
};

export default ContactUs;
