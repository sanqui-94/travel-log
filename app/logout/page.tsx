import Link from "next/link";

export default function Logout() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">You have been logged out</h1>
        <p className="mb-6">Thank you for using our service!</p>
        <Link href="/" className="btn btn-primary">
          Go to Home
        </Link>
      </div>
    </div>
  );
}
