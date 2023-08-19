"use client";
import Image from "next/image";
import { getProfile } from "@/sanity/lib/sanity.query";
import type { ProfileType } from "@/types";

export default function Home() {
  const profile = getProfile();
  console.log("Profile : ", profile);

  return (
    <>
      <button onClick={() => console.log("Hey")}>Click Me</button>
    </>
  );
}
