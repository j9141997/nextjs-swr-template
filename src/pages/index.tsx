import { useUsers } from "@/features/user/hooks/useUsers";
import Head from "next/head";

export default function Home() {
  const { data } = useUsers();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>hello</h1>
        <ul>
          {data.map((user) => (
            <li key={user.name}>
              <p>{user.name}</p>
              <p>{user.email}</p>
              <p>{user.age}</p>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
