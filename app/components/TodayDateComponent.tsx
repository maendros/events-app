import { format } from "date-fns";
import { enGB } from "date-fns/locale";

const TodayDateComponent: React.FC = () => {
  const today = new Date();
  const formattedDate = format(today, "EEEE, MMMM dd", {
    locale: enGB,
  });

  return <p className="mb-10 text-gray-400">{formattedDate}</p>;
};

export default TodayDateComponent;
