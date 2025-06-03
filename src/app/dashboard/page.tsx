import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import LogoutButton from "../../components/LogoutButton";

export default async function Page() {
  const session = await getServerSession();

  if (!session) {
    redirect("/");
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 bg-slate-600">
      <div className="bg-white rounded-md shadow-md p-6 w-full max-w-sm text-center">
        <h1 className="text-xl font-semibold mb-4">Olá, {session?.user?.name}</h1>
        <p className="mb-6">Dashboard</p>
        <LogoutButton />
      </div>
    </main>
  );
}
