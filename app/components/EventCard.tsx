// components/EventCard.tsx
"use client";

import { useRouter } from "next/navigation";

interface EventCardProps {
  event: Events;
  title: string;
}

const EventCard: React.FC<EventCardProps> = ({ event, title }) => {
  const router = useRouter();

  const capitalize = (str: string): string => {
    if (str.length === 0) {
      return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const handleViewClick = () => {
    router.push(`events/${event.eventType}`);
  };

  return (
    <div className="p-6 bg-zinc-800 rounded-lg shadow basis-1/2 mb-4 sm:mb-0">
      <h5 className="text-2xl font-bold tracking-tight  text-white">
        Recent {capitalize(title)}
      </h5>

      <p className="mb-2 mt-20 font-normal ">{event.name}</p>
      <p className="mb-2 font-normal ">{event.location}</p>
      <button
        type="button"
        className="text-black bg-slate-50 hover:bg-slate-300 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center text-center"
        onClick={handleViewClick}
      >
        View {title}
      </button>
    </div>
  );
};

export default EventCard;
