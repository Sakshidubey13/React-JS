"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex justify-center p-4 gap-5  ">
     {/*<button onClick={()=>router.push("/profile")}>Profile</button> */}

      <Link href={"/profile"}>Profile</Link>
     <button onClick={()=>router.push("/about")}>About</button> 
      <Link href={"/contact"}>Contact</Link>
    </div>
  );
}
