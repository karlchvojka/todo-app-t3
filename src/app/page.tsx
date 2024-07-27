/*
DEFAULT IMPORTS
*/
import { getServerAuthSession } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";

/*
CUSTOM IMPORTS
*/
import Header from '~/app/_components/header';

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await getServerAuthSession();

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <Header />
      <main>
        <h1>Create T3 Todo App</h1>

        <p>footer here</p>
      </main>
      
      <footer className="bg-neutral-900">
        <p>Footer</p>
      </footer>
    </HydrateClient>
  );
}