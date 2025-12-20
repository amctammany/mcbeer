//import { User } from "next-auth";
import { forbidden, notFound, redirect, unauthorized } from "next/navigation";
import { verifySession } from "./verifySession";
import { OptionalNullable } from "./utils";

export async function authorizeResource<T extends { userId?: string }>(
  redirectTo: string,
  fn: (...props: any[]) => Promise<T | null>,
  ...args: any[]
) {
  const session = await verifySession(redirectTo);
  //if (session?.role !== "SUPERUSER") return forbidden();
  const resource = await fn(...args);
  //console.log(args, resource);

  if (!resource) return notFound();
  if (session?.role === "SUPERUSER") return resource;
  if (resource.userId && resource.userId === session.user.id) return resource;
  if (session?.role === "ADMIN") return resource;
  return forbidden();
}
