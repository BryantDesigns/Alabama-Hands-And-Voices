import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <Link href="/" className="text-xl font-bold">
          MyApp
        </Link>
        <div className="flex space-x-4">
          <Link href="/about">About</Link>
          <Link href="/programs">Programs</Link>
          <Link href="/resources">Resources</Link>
        </div>
      </nav>
    </header>
  );
}
