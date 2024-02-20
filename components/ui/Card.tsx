import React, { ReactHTMLElement } from "react";
import { DollarSign, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { propagateServerField } from "next/dist/server/lib/render-server";

type CardProps = {
  label: string;
  icon: LucideIcon;
  amount: string;
  description: string;
};

export default function Card(props: CardProps) {
  return (
    <CardContent>
      <section className="flex justify-between">
        <p className="text-sm">{props.label}</p>
        <props.icon className="h-4 w-4 text-gray-400" />
      </section>
      <section>
        <h2 className="text-2xl font-semibold">{props.amount}</h2>
        <h2 className="text-xs text-gray-500">{props.description}</h2>
      </section>
      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2 "></section>
    </CardContent>
  );
}

export function CardContent(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn(
        "flex w-full flex-col gap-3 rounded-xl border p-5 shadow",
        props.className
      )}
    />
  );
}
