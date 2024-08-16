"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { format } from "date-fns";

export default function Home() {
  const router = useRouter();
  const now = new Date();
  const nowDate = format(now, "yyyy-MM-dd");

  useEffect(() => {
    router.push(`/diary/${nowDate}`);
  }, [router, nowDate]);

  return <>Loading...</>;
}
