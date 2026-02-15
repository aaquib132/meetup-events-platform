import { Link } from "react-router-dom";
import useFetch from "../useFetch";

const Cards = ({ filter, search }) => {
  const { data, loading, error } = useFetch("http://localhost:3000/events");

  console.log(data)
  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!data) return null;

  const filteredData = data
    .filter((event) =>
      filter === "Both" ? true : event.mode === filter
    )
    .filter((event) =>
      event.eventTitle?.toLowerCase().includes(search.toLowerCase())
    );

  if (filteredData.length === 0) {
    return (
      <p className="text-center mt-10 text-gray-500">
        No events found
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
      {filteredData.map((event) => (
        <div
          key={event._id}
          className="bg-white w-full max-w-sm rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300"
        >
        <Link to={`event/${event._id}` }>

          <div className="relative">
            <img
              className="w-full h-44 object-cover"
              src={event.eventPosterUrl}
              alt={event.eventTitle}
            />

            <span className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 text-xs rounded-full shadow">
              {event.mode} Event
            </span>
          </div>

         
          <div className="p-4 space-y-1">
            <p className="text-sm text-gray-500">
              {new Date(event.date)
                .toLocaleDateString("en-IN", {
                  weekday: "short",
                  month: "short",
                  year: "numeric",
                })
                .replace(",", "")}{" "}
              • {event.startTime} IST
            </p>

            <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
              {event.eventTitle}
            </h3>
          </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Cards;
