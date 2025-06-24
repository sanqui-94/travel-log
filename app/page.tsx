import LoginButton from "@/app/components/buttons/LoginButton";

export default function Home() {
  return (
    <div className="hero bg-base-300 container mx-auto mt-4">
      <div className="hero-content min-h-96 text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Travel Log</h1>
          <p className="py-6">
            Keep track of your travels and adventures. Add locations, photos, and notes to create a
            digital journal of your journeys.
          </p>
          <LoginButton />
        </div>
      </div>
    </div>
  );
}
