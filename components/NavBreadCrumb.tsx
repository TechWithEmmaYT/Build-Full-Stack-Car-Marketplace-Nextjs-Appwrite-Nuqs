import React, { Fragment } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { Slash } from "lucide-react";

interface PropsType {
  breadcrumbItems: {
    label: string;
    href?: string;
    isCurrentPage?: boolean;
  }[];
}
const NavBreadCrumb = ({ breadcrumbItems }: PropsType) => {
  return (
    <div className="w-full">
      <Breadcrumb>
        <BreadcrumbList className="!gap-1">
          {breadcrumbItems.map((item, index) => (
            <Fragment key={index}>
              <BreadcrumbItem
                className="bg-white
                  rounded-[29px] !p-[2px_8px]
                  "
              >
                {item.href ? (
                  <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
                ) : (
                  <BreadcrumbPage>
                    <span className="!text-[#6c8ea0]">{item.label}</span>
                  </BreadcrumbPage>
                )}
              </BreadcrumbItem>

              {index < breadcrumbItems.length - 1 && (
                <BreadcrumbSeparator>
                  <Slash
                    className="
                          text-[#ccc] !w-[10px]
                          !h-[10px] transform rotate-[-25deg]
                          "
                  />
                </BreadcrumbSeparator>
              )}
            </Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default NavBreadCrumb;
