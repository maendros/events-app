import { format } from "date-fns";
import { enGB } from "date-fns/locale"; // Import enGB directly
import { MapPinIcon, UsersIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import TableHeader from "./TableHeader";

interface TableEventsProps {
  events: Events[];
}

const TableEvents: React.FC<TableEventsProps> = ({ events }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
      <TableHeader />
      <div className="min-w-full overflow-hidden overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-slate-300  table-auto">
          <tbody>
            {events.map((event) => (
              <tr key={event.id} className="border-b border-t  border-gray-700">
                <th
                  scope="row"
                  className=" md:px-6  md:py-4 font-medium  whitespace-nowrap"
                >
                  <Image
                    src={event.icon}
                    width={60}
                    height={60}
                    alt={event.name}
                    className="md:hidden"
                  />
                  <Image
                    src={event.icon}
                    width={20}
                    height={20}
                    alt={event.name}
                    className="hidden md:inline-block"
                  />
                </th>
                <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                  {event.name}
                </td>
                <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                  {event.host}
                </td>
                <td className="flex items-center px-4 md:px-6 py-4 whitespace-nowrap">
                  <MapPinIcon className="h-4 w-4 text-slate-300 mr-2" />
                  {event.location}
                </td>
                <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                  {format(new Date(event.eventTime), "EEE, dd MMM yyyy", {
                    locale: enGB,
                  })}
                </td>
                <td className="flex items-center px-4 md:px-6 py-4 ">
                  <UsersIcon className="h-4 w-4 text-slate-300 mr-2" />
                  {event.attendance}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>{" "}
    </div>
  );
};

export default TableEvents;
