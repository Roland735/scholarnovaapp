import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Login() {
  const session = await getServerSession();
  if (session) {
    redirect("/dashboard");
  }
  return (
    <div>
      <div className="">Please Select YOur Role</div>
      <div className="">
        <Link href={"student"}>Student</Link>
        <Link href={"admin"}>Admin</Link>
        <Link href={"teacher"}>Teacher</Link>
        <Link href={"parent"}>Parent</Link>
      </div>
    </div>
  );
}
