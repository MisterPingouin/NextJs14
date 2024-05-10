import Link from "next/link";
import Links from "./links/Links";

const Navbar = () => {
  return (
    <div className="container h-25 mt-5 flex items-center justify-between">
      <Link href="/" className="font-bold text-3xl">Logo</Link>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;