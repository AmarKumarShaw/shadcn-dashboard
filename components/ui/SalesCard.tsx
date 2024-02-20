import React from "react";

export type SalesProps = { name: string; email: string; saleAmount: string };

export default function SalesCard(props: SalesProps) {
  return (
    <div className="flex flex-wrap justify-between gap-3 w-full">
      <section className="flex justify-between gap-3 w-full px-4  text-start">
        <div className=" h-12 w-12 rounded-full bg-gray-100 p-1">
          <img
            src="https://api.dicebear.com/7.x/lorelei/svg?seed=Milo"
            width={200}
            height={200}
            alt="avatar"
          />
        </div>
        <div className="text-sm w-[120px]">
          <p>{props.name}</p>
          <div className="text-ellipsis overflow-hidden whitespace-nowrap sm:w-auto text-gray-400">
            {props.email}
          </div>
        </div>
        <div className="flex">
          {" "}
          <p>{props.saleAmount}</p>
        </div>
      </section>
    </div>
  );
}
