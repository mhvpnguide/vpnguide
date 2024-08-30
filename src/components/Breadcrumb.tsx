"use client"
import React from "react";
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/react";
import { useRouter } from "next/router";
import Link from "next/link";
import { usePathname } from "next/navigation"

type Pathname = string; // Each value in the pathnames array is a string

 const CustomBreadcrumb=()=> {
  const pathname = usePathname()
  const pathnames =pathname ? pathname.split("/").filter((x) => x) : [];
  return (
    <>
    <Breadcrumbs className="flex flex-row">
      <BreadcrumbItem>
      <Link href="/">Home</Link>
      </BreadcrumbItem>
      {pathnames.map((value:Pathname, index:number) => {
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