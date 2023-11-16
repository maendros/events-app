// components/NotFound.tsx

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
      <p className="text-lg">The page you are seeking does not exist.</p>
    </div>
  );
};

export default NotFound;
