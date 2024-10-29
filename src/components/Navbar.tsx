import Link from "next/link";

export default function Navbar() {
  return (
    <div className="absolute w-full p-10 flex items-center justify-between">
      <Link href="/" className="text-2xl tracking-wider">
        Home
      </Link>
      <nav className="flex gap-6 items-center">
        <Link
          className="text-xl capitalize tracking-wider"
          href={"/performance"}
        >
          performance
        </Link>
        <Link
          className="text-xl capitalize tracking-wider"
          href={"/reliability"}
        >
          reliability
        </Link>
        <Link className="text-xl capitalize tracking-wider" href={"/scale"}>
          scale
        </Link>
      </nav>
    </div>
  );
}
