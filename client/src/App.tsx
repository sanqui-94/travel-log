import "./App.css";
import AppRouter from "./router";
import { env } from "../lib/env.ts";

function App() {
  console.log(env);
  return <AppRouter />;
}

export default App;
