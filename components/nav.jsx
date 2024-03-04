import Link from "next/link";
import NavHeader from "./navHeader";

export default function Nav() {
  return (
    <div className="flex flex-col h-screen">
      <nav className="grid grids-rows-4 items-end p-9 bg-gray-800 text-white w-80 ml-auto flex-grow">
        <div>
          <NavHeader></NavHeader>
        </div>
        <div>
          <Link href="/" className="text-white hover:text-gray-300 ">
            메인
          </Link>
        </div>
        <div>
          <Link href="/about" className="text-white hover:text-gray-300">
            상세
          </Link>
        </div>
        <div>
          <Link href="/diary" className="text-white hover:text-gray-300">
            개발일지
          </Link>
        </div>
      </nav>
    </div>
  );
}
