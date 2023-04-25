import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";
import "https://deno.land/std@0.145.0/dotenv/load.ts";
import { connect } from "npm:@planetscale/database";

const connection = await connect({
  url: Deno.env.get("DATABASE_URL"),
});

const results = await connection.execute("SELECT * FROM users");

export default function Home() {
  console.log(results);

  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <img
          src="/logo.svg"
          class="w-32 h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p class="my-6">
          Welcome to `fresh`. Try updating this message in the
          ./routes/index.tsx file, and refresh.
        </p>
        <Counter start={3} />
      </div>
    </>
  );
}
