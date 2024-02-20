import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "as@expeditech.com",
    },
    {
      id: "728ed52f",
      amount: 700,
      status: "success",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 400,
      status: "pending",
      email: "pkj@expeditech.com",
    },
    {
      id: "728ed52f",
      amount: 400,
      status: "failed",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 750,
      status: "success",
      email: "m@example.com",
    },
    // ...
  ];
}

export default async function Users() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
