import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="card bg-base-300 container mx-auto mt-4 flex min-h-72 w-full flex-col items-center justify-center gap-4">
      <div role="alert" className="alert alert-error min-w-1/2 text-center">
        <span>Something went wrong.</span>
      </div>
      <Link className="btn btn-primary text-xl" href="/">
        Travel Log
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 12h14M5 12l4 4m-4-4l4-4"
          ></path>
        </svg>
      </Link>
    </div>
  );
}
