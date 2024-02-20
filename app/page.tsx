import Card, { CardContent } from "@/components/ui/Card";
import PageTitle from "@/components/ui/PageTitle";
import { DollarSign, LucideIcon } from "lucide-react";
import BarChart from "@/components/ui/BarChart";
import Image from "next/image";
import SalesCard from "@/components/ui/SalesCard";
import { SalesProps } from "@/components/ui/SalesCard";
type CardProps = {
  label: string;
  icon: LucideIcon;
  amount: string;
  description: string;
};

const cardData: CardProps[] = [
  {
    label: "Total Revenue",
    amount: "$40,000",
    description: "This is good time to invest",
    icon: DollarSign,
  },
  {
    label: "Total Revenue",
    amount: "$40,000",
    description: "This is good time to invest",
    icon: DollarSign,
  },
  {
    label: "Total Revenue",
    amount: "$40,000",
    description: "This is good time to invest",
    icon: DollarSign,
  },
  {
    label: "Total Revenue",
    amount: "$40,000",
    description: "This is good time to invest",
    icon: DollarSign,
  },
];

const userSalesData: SalesProps[] = [
  {
    name: "Ginger",
    email: "olivia.martin@email.com",
    saleAmount: "+$1,999.00",
  },
  {
    name: "Trouble",
    email: "isabella.nguyen@email.com",
    saleAmount: "+$1,999.00",
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    saleAmount: "+$39.00",
  },
  {
    name: "William Kim",
    email: "will@email.com",
    saleAmount: "+$299.00",
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    saleAmount: "+$39.00",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Dashboard" />
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((data, index) => {
          return (
            <Card
              key={index}
              amount={data.amount}
              description={data.description}
              label={data.label}
              icon={data.icon}
            />
          );
        })}
      </section>
      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2 w-ful">
        <CardContent>
          <p className="p-4 font-semibold">Overview</p>
          <BarChart />
        </CardContent>
        <CardContent>
          <section>
            <p>Recent Sales</p>
            <p className="text-sm text-gray-400 mb-3">
              You made 265 sales this month.
            </p>
          </section>
          {userSalesData.map((data, index) => {
            return (
              <SalesCard
                key={index}
                name={data.name}
                email={data.email}
                saleAmount={data.saleAmount}
              />
            );
          })}
        </CardContent>
      </section>
    </div>
  );
}
