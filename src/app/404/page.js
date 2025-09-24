import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white px-4">
      <h1 className="text-9xl font-extrabold mb-4">404</h1>
      <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-center">
        Oops! Page Not Found
      </h2>
      <p className="text-lg md:text-xl mb-8 text-center max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link href="/">
        <button className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition">
          Go Back Home
        </button>
      </Link>
    </main>
  );
}
