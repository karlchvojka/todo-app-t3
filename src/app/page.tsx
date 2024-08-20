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
      <main id="mainWrap" className="flex-grow max-w-3xl my-0 mx-auto p-2">
        <h1 className="text-lime-500 text-center">Create T3 Todo App</h1>
        <p className="text-center">Welcome to the best todo app ever. Developed especially so you can have a todo app with that cyberpunk/matrix esc flavor.</p>
        <p className="text-center">This app is being used partially to help learn the <a href="https://create.t3.gg/">Create T3 App</a> Stack. Created and developed by <a href="https://x.com/t3dotgg">Theo</a>, and his community.</p>
        <p className="text-center">Please enjoy!</p>
      </main>
      
      <footer className="flex bg-neutral-900 h-auto align-bottom p-4">
        <p className="my-auto"><a href="https://www.karlchvojka.com">© 2023 - Karl Chvojka</a></p>
      </footer>
    </HydrateClient>
  );
}