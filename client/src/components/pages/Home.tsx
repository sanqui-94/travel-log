import LoginButton from "../buttons/LoginButton.tsx";
import { env } from "../../../lib/env.ts";

export default function Home() {
  console.log(env);
  return (
    <div className="hero bg-base-300 container mx-auto mt-4">
      <div className="hero-content text-center min-h-96">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Travel Log</h1>
          <p className="py-6 ">
            Keep track of your travels and adventures. Add locations, photos, and notes to create a
            digital journal of your journeys.
          </p>
          <LoginButton />
        </div>
      </div>
    </div>
  );
}
