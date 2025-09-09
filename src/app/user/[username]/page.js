import Image from "next/image";

export default function UserProfileIndexPage({ params }) {
  console.log("params is :", params?.username);
  return (
    <>
      <h1>Hello This is UserProfileIndexPage page</h1>
    </>
  );
}