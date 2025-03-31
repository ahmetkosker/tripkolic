import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Link href="/login" className="bg-orange-500 text-white px-4 py-2 rounded-md">Login</Link>
    </div>
  );
}
