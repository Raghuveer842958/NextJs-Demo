import Image from "next/image";
import Link from "next/link";

export default function UserLayout({ children, params }) {
  console.log("Params is :", params);
  return (
    <div>
      <h1>User: {params.username}</h1>
      <nav>
        <Link href={`/user/${params?.username}`}>Overview</Link> |
        <Link href={`/user/${params?.username}/profile`}>Profile</Link> |
        <Link href={`/user/${params?.username}/setting`}>Setting</Link>
        <Link href={`/user/${params?.username}/setting`}>Change Password</Link>
      </nav>
      <hr />
      <div>{children}</div>
    </div>
  );
}
