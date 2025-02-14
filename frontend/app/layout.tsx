import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./ClientLayout";
import client from "@/src/lib/backend/client";
import { cookies } from "next/headers";
import ClinetLayout from "./ClientLayout";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const response = await client.GET("/api/v1/members/me", {
    headers: {
      cookie: (await cookies()).toString(),
    },
  });

  const me = response.data
    ? response.data.data
    : {
        id: 0,
        nickname: "",
        createdDate: "",
        modifiedDate: "",
      };

  return <ClinetLayout me={me}>{children}</ClinetLayout>;
}
