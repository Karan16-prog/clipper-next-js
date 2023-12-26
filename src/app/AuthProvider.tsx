"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";
import { Session } from "next-auth";

export default function AuthProvider({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Promise<Session | null>;
}) {
  return <SessionProvider>{children}</SessionProvider>;
}
