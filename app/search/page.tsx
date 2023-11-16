import { notFound } from "next/navigation";
import TableEvents from "../components/TableEvents";
import { mockEvents } from "../constants/consts";

type Props = {
  searchParams?: { event: string };
};
const SearchPage = async ({ searchParams }: Props) => {
  if (
    (searchParams && Object.entries(searchParams || {}).length === 0) ||
    !searchParams
  ) {
    return notFound();
  }

  const filteredEvents = mockEvents.filter(
    (el) =>
      el.host.toLowerCase().includes(searchParams.event.toLowerCase()) ||
      el.name.toLowerCase().includes(searchParams.event.toLowerCase()) ||
      el.location.toLowerCase().includes(searchParams.event.toLowerCase())
  );
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl w-full text-center md:text-left">
      {filteredEvents?.length > 0 ? (
        <TableEvents events={filteredEvents} />
      ) : (
        <p className="x-auto text-center ">No events were Found</p>
      )}
    </main>
  );
};

export default SearchPage;
