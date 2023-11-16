import TableEvents from "../../components/TableEvents";
import { mockEvents } from "../../constants/consts";

type Props = {
  params: { eventType: string };
};
const Events = ({ params: { eventType } }: Props) => {
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl w-full text-center md:text-left">
      <TableEvents
        events={mockEvents.filter((el) => el.eventType === eventType)}
      />
    </main>
  );
};

export default Events;
