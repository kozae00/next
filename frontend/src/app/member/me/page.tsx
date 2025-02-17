import { cookies } from "next/headers";
import ClientPage from "./ClientPage";
import client from "@/src/lib/backend/client";

export default async function Page() {
  const response = await client.GET("/api/v1/members/me", {
    headers: {
      cookie: (await cookies()).toString(),
    },
  });

  if (response.error) {
    return <div>{response.error.msg}</div>;
  }

  const memberDto = response.data.data;

  return <ClientPage me={memberDto} />;
}
