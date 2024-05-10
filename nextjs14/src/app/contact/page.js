import Image from "next/image";

export const metadata = {
  title: "Contact Page",
  description: "Contact description",
};

const ContactPage = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:gap-24 w-full">
      <div className="md:flex-1 h-128 relative">
        <Image src="/contact.png" alt="Contact Image" width={500} height={500} />
      </div>
      <div className="md:flex-1">
        <form className="flex flex-col gap-5">
          <input type="text" placeholder="Name and Surname" className="p-5 rounded-lg bg-bgColorSoft text-textColorSoft" />
          <input type="text" placeholder="Email Address" className="p-5 rounded-lg bg-bgColorSoft text-textColorSoft" />
          <input type="text" placeholder="Phone Number (Optional)" className="p-5 rounded-lg bg-bgColorSoft text-textColorSoft" />
          <textarea
            cols="30"
            rows="10"
            placeholder="Message"
            className="p-5 rounded-lg bg-bgColorSoft text-textColorSoft"
          ></textarea>
          <button className="p-5 bg-btnColor text-textColor font-bold rounded-lg">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
