import React from "react";

type Props = {
  column: string;
};

export default function DataTable({ column }: Props) {
  return <div> {column} </div>;
}
