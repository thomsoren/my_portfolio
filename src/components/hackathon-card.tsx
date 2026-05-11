"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ChevronRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  dates: string;
  location?: string;
  image?: string;
  win?: string;
  links?: readonly {
    icon: React.ReactNode;
    title: string;
    href: string;
  }[];
}

export function HackathonCard({
  title,
  description,
  dates,
  location,
  image,
  win,
  links,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <li
      className="group relative ml-10 py-4 cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="absolute -left-16 top-2 flex items-center justify-center bg-background rounded-full">
        <Avatar className="border size-12 m-auto">
          <AvatarImage src={image} alt={title} className="object-contain" />
          <AvatarFallback>{title[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-1 flex-col justify-start gap-1">
        <div className="flex items-center justify-between w-full">
          <h2 className="inline-flex items-center font-semibold leading-none">
            {title}
            <ChevronRightIcon
              className={cn(
                "size-4 translate-x-0 transform opacity-0 transition-all duration-100 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                open ? "rotate-90" : "rotate-0"
              )}
            />
          </h2>
        </div>
        {dates && (
          <time className="text-xs text-muted-foreground">{dates}</time>
        )}
        {win && (
          <Badge variant="secondary" className="w-fit text-xs">
            {win}
          </Badge>
        )}
        {open && description && (
          <span className="prose dark:prose-invert text-sm text-muted-foreground">
            {description}
          </span>
        )}
      </div>
      {open && links && links.length > 0 && (
        <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
          {links?.map((link, idx) => (
            <Link href={link.href} key={idx} onClick={(e) => e.stopPropagation()}>
              <Badge key={idx} title={link.title} className="flex gap-2">
                {link.icon}
                {link.title}
              </Badge>
            </Link>
          ))}
        </div>
      )}
    </li>
  );
}
