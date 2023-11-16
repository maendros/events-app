// components/Sidebar.tsx
import Link from "next/link";
import {
  BellIcon,
  HomeIcon,
  Cog8ToothIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const Sidebar: React.FC = () => {
  return (
    <div className="flex flex-row md:flex-col items-center md:w-20 bg-black p-4 justify-between">
      <div className="mb-4">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={40}
            height={40}
            priority
            layout="fixed"
          />
        </Link>
      </div>

      <div className="flex flex-row md:flex-col items-center justify-center md:flex-grow">
        <Link href="/">
          <HomeIcon className="h-6 w-6 m-4 text-white" />
        </Link>

        <a href="#bell">
          <BellIcon className="h-6 w-6 m-4 text-white" />
        </a>
        <a href="#chat">
          <ChatBubbleLeftRightIcon className="h-6 w-6 m-4 text-white" />
        </a>
        <a href="#cog">
          <Cog8ToothIcon className="h-6 w-6 m-4 text-white" />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
