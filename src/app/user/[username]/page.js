import Image from "next/image";

export default function UserProfileIndexPage({ params }) {
  console.log("params is :", params?.username);
  return (
    <>
      <h1>Hello this is Raghuveer chauhan</h1>
    </>
  );
}