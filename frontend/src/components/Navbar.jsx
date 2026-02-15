import { Search } from "lucide-react";

const Navbar = ({search, setSearch}) => {
  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-white shadow-sm shadow-gray-300/40">

      
     
      <img
        src="/logo.png"
        alt="Logo"
        className="w-28 object-contain"
      />

   
      <div className="flex items-center w-full max-w-md bg-gray-100 rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-blue-500 transition">

        <Search className="text-gray-500 w-5 h-5" />

        <input
          type="text"
          placeholder="Search by title and tags..."
          className="bg-transparent outline-none px-3 w-full text-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      
    </nav>
  );
};

export default Navbar;
