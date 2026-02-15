import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import Navbar from "../components/Navbar";
import { Clock, MapPin, IndianRupee } from "lucide-react";

const Details = () => {
  const { eventId } = useParams();
  const { data, loading, error } = useFetch(
    `http://localhost:3000/events/${eventId}`,
  );

  console.log(data);
  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!data) return null;

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-linear-to-b from-gray-100 to-gray-200 py-10">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 leading-tight">
                {data.eventTitle}
              </h1>

              <div className="text-gray-700">
                <p className="text-sm">Hosted By</p>
                <p className="font-semibold">{data.hostedBy}</p>
              </div>
            </div>

            <img
              src={data.eventPosterUrl}
              alt="event"
              className="w-full max-w-2xl aspect-video object-cover rounded-2xl shadow-md"
            />

            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-gray-800">Details</h2>
              <p className="text-gray-600 leading-relaxed">
                {data.eventDetails}
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-gray-800">
                Additional Information
              </h2>

              <div className="space-y-1 text-gray-700">
                <p>
                  <span className="font-semibold">Dress Code:</span>{" "}
                  {data.dressCode}
                </p>
                <p>
                  <span className="font-semibold">Age Restriction:</span>{" "}
                  {data.ageRestriction}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-800">Event Tags</h2>

              <div className="flex flex-wrap gap-2">
                {data.eventTags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-red-500/90 text-white px-4 py-1.5 rounded-full text-sm shadow"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-2xl shadow-md space-y-5 top-24">
              <div className="flex items-start gap-3">
                <Clock className="text-gray-500 mt-1" />
                <div className="text-sm text-gray-700 space-y-1">
                  <p>
                    {new Date(data.date).toLocaleDateString("en-IN", {
                      weekday: "short",
                      month: "short",
                      year: "numeric",
                    })}{" "}
                    • {data.startTime}
                  </p>
                  <p>
                    {new Date(data.date).toLocaleDateString("en-IN", {
                      weekday: "short",
                      month: "short",
                      year: "numeric",
                    })}{" "}
                    • {data.endTime}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="text-gray-500 mt-1" />
                <p className="text-sm text-gray-700">{data.location}</p>
              </div>

              <div className="flex items-center gap-3">
                <IndianRupee className="text-gray-500" />
                <p className="text-lg font-semibold text-gray-800">
                  {data.price}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">
                Speakers ({data.speakers.length})
              </h2>

              <div className="grid grid-cols-2 gap-4">
                {data.speakers.map((spk) => (
                  <div
                    key={spk._id}
                    className="bg-white p-4 rounded-xl shadow text-center flex flex-col items-center"
                  >
                    <img
                      className="w-20 h-20 object-cover rounded-full mb-3"
                      src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                    />
                    <p className="font-semibold text-gray-800 text-sm">
                      {spk.speakerName}
                    </p>
                    <p className="text-xs text-gray-500">
                      {spk.speakerDesignation}
                    </p>
                  </div>
                ))}
              </div>

              <button className="w-full bg-red-400 text-white py-3 rounded-xl font-semibold hover:scale-[1.02] transition">
                RSVP
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
