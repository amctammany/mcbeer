"use client";

import { useRouter } from "next/navigation";
import IconButton from "./IconButton";
import { ArrowLeft } from "lucide-react";

export default function BackButton({ text = "Cancel" }: { text?: string }) {
  const router = useRouter();

  return (
    <IconButton type="button" icon={ArrowLeft} onClick={() => router.back()}>
      {text}
    </IconButton>
  );
}
