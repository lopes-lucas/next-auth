"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button
      className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
      onClick={() => signOut()}
    >
      Sair
    </button>
  );
}
