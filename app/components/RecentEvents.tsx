// components/RecentEvents.tsx

import EventCard from "./EventCard";

interface RecentEventsProps {
  events: Events[];
}

const RecentEvents: React.FC<RecentEventsProps> = ({ events }) => {
  const eventsOfTypeEvent = events.filter(
    (event) => event.eventType === "event"
  );
  const eventsOfTypeVenue = events.filter(
    (event) => event.eventType === "venue"
  );

  const mostRecentEventOfTypeEvent = eventsOfTypeEvent.reduce((prev, current) =>
    new Date(current.eventTime) > new Date(prev.eventTime) ? current : prev
  );
  const mostRecentEventOfTypeVenue = eventsOfTypeVenue.reduce((prev, current) =>
    new Date(current.eventTime) > new Date(prev.eventTime) ? current : prev
  );

  return (
    <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-4 w-full ">
      <EventCard event={mostRecentEventOfTypeEvent} title="events" />
      <EventCard event={mostRecentEventOfTypeVenue} title="venues" />
    </div>
  );
};

export default RecentEvents;
