"use client";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex w-full h-[80vh] items-center justify-center">
      <SignUp path="/sign-up" />;
    </div>
  );
}
