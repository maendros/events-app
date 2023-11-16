const TableHeader: React.FC = () => (
  <div className="flex justify-between items-center mb-4 mt2">
    <h2 className="text-2xl font-bold text-slate-400">Events</h2>
    <button
      type="button"
      className="text-black bg-rgb-221-255-85 hover:bg-rgb-170-204-0  focus:ring-rgb-170-204-0  focus:outline-none focus:border-rgb-170-204-0  rounded-lg text-sm px-5 py-2 mt-2 mr-1"
    >
      Create Event
    </button>
  </div>
);

export default TableHeader;
