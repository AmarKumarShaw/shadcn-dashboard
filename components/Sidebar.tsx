"use client";
import React, { useState } from "react";
import {
  AlertCircle,
  Archive,
  ArchiveX,
  File,
  Inbox,
  LayoutDashboard,
  MessagesSquare,
  PenBox,
  Search,
  Send,
  SeparatorHorizontal,
  Settings,
  ShoppingCart,
  Trash2,
  UserRound,
  Users2,
} from "lucide-react";
import { Nav } from "./ui/nav";
type Props = {};

export default function Sidebar({}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div>
      <Nav
        isCollapsed={false}
        links={[
          {
            title: "Dashboard",
            href: "/",
            icon: LayoutDashboard,
            variant: "ghost",
          },
          {
            title: "  Users",
            href: "/users",
            icon: UserRound,
            variant: "ghost",
          },
          {
            title: "Orders",
            href: "/orders",
            icon: ShoppingCart,
            variant: "ghost",
          },
          {
            title: "Settings",
            href: "/settings",
            icon: Settings,
            variant: "ghost",
          },
        ]}
      />
    </div>
  );
}
