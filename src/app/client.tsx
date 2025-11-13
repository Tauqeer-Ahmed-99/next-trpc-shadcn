"use client";

import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

const Client = () => {
  const trpc = useTRPC();

  const { data } = useSuspenseQuery(
    trpc.hello.queryOptions({ text: "from tRPC" })
  );

  return (
    <div>
      <Button>{data.greeting}</Button>
    </div>
  );
};

export default Client;
