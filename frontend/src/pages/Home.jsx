import { useState } from "react";
import Cards from "../components/Cards";

const Home = ({ search }) => {
  const [filter, setFilter] = useState("Both");

  const handleFilter = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-100 to-gray-200">

  
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 pb-6">

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">

          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 tracking-tight leading-tight">
            Meetup Events
          </h1>

         
          <div className="relative w-full sm:w-auto">
            <select
              value={filter}
              onChange={handleFilter}
              className="w-full sm:w-auto appearance-none bg-white border border-gray-300 text-gray-700 py-2.5 pl-4 pr-10 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-black hover:shadow-md transition"
            >
              <option value="Both">All Events</option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>

            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-xs">
              ▼
            </span>
          </div>

        </div>
      </div>

      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
        <Cards filter={filter} search={search} />
      </div>

    </div>
  );
};

export default Home;
