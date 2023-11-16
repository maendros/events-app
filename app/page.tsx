import RecentEvents from "./components/RecentEvents";
import TableEvents from "./components/TableEvents";
import { mockEvents } from "./constants/consts";

const IndexPage = () => {
  return (
    <>
      <RecentEvents events={mockEvents} />
      <TableEvents events={mockEvents} />
    </>
  );
};

export default IndexPage;
