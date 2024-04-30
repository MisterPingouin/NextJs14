import Links from "./links/Links";

const Navbar = () => {
  return (
    <div className="container h-25 mt-4 flex items-center justify-between">
      <div className="font-bold text-3xl">Logo</div>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;