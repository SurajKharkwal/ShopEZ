"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

type ReactProps = {
  children: React.ReactNode;
};

const queryClient = new QueryClient();

export default function ReactQuery({ children }: ReactProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
