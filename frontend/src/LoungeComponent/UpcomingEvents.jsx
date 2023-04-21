import React from "react";

const UpcomingEvents = () => {
  const events = [
    {
      name: "Live Music Night",
      date: "May 1st",
      time: "8:00 PM",
      imageUrl:
        "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBhcnR5JTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Trivia Night",
      date: "May 8th",
      time: "7:00 PM",
      imageUrl:
        "https://images.unsplash.com/photo-1504704911898-68304a7d2807?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGFydHklMjBwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Wine Tasting",
      date: "May 15th",
      time: "6:00 PM",
      imageUrl: "https://via.placeholder.com/300",
    },
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold mb-4 text-[#FB320D]">
        Upcoming Events
      </h2>
      <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((event) => (
          <div
            key={event.name}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={event.imageUrl}
              alt={event.name}
              className="w-full h-48 object-cover"
            />
            <div className="py-4 px-6">
              <h3 className="text-lg font-bold mb-2">{event.name}</h3>
              <p className="text-gray-700 text-sm mb-2">
                {event.date} at {event.time}
              </p>
              <button className="bg-[#FB320D] text-white py-2 px-4 rounded-full outline-none">
                Get Tickets
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
