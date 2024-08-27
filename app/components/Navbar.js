import Link from "next/link";

const Navbar = () => {
  return (
    <header className=" bg-blue-600 text-white py-6 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6">
        <h1 className="text-3xl font-bold">TaskForge</h1>
        <nav className="space-x-4">
          <a href="/home" className="text-white hover:underline">
            Home
          </a>
          <a href="/board" className="text-white hover:underline">
            Board
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
