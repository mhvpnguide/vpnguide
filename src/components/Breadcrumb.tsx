"use client"
import React from "react";
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/react";
import { useRouter } from "next/router";
import Link from "next/link";
import { usePathname } from 'next/navigation'

 const CustomBreadcrumb=()=> {
  const pathname = usePathname()
  const pathnames =pathname ? pathname.split("/").filter((x) => x) : [];
  return (
    <>
    <Breadcrumbs isDisabled className="flex flex-row">
      <BreadcrumbItem>Home</BreadcrumbItem>
      {pathnames.map((value, index) => {
        const href = `/${pathnames.slice(0, index + 1).join("/")}`;
        return (
          <BreadcrumbItem key={href}>
            <Link href={href}>{value.charAt(0).toUpperCase() + value.slice(1)}</Link>
          </BreadcrumbItem>
        );
      })}
    </Breadcrumbs>
    </>
  );
}

export default CustomBreadcrumb;