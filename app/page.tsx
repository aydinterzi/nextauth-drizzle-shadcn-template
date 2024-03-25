import { db } from "@/db";

export default async function Home() {
  const users = await db.query.users.findMany();
  console.log(users);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
