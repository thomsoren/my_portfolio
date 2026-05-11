"use client";

import { useRef, useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { Drawer } from "vaul";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

function ProjectDetailContent({
  title, dates, description, tags, links, video, image,
}: Pick<Props, "title" | "dates" | "description" | "tags" | "links" | "video" | "image">) {
  return (
    <>
      {video && (
        <video
          src={video}
          autoPlay loop muted playsInline
          preload="metadata"
          disablePictureInPicture
          {...({ 'webkit-playsinline': 'true' } as any)}
          className="pointer-events-none mx-auto w-full object-cover object-top min-h-[200px]"
        />
      )}
      {image && (
        <Image
          src={image} alt={title} width={800} height={450}
          className="w-full overflow-hidden object-cover object-top min-h-[200px]"
        />
      )}
      <CardHeader className="px-6 pt-8">
        <div className="space-y-3">
          <CardTitle className="text-lg">{title}</CardTitle>
          <time className="font-sans text-xs text-muted-foreground">{dates}</time>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {description}
          </Markdown>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col px-6 pt-3">
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <Badge className="px-1 py-0 text-[10px]" variant="secondary" key={tag}>
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-6 pb-8 pt-3">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links.map((link, idx) => (
              <Link href={link?.href} key={idx} target="_blank">
                <Badge key={idx} className="flex gap-2 px-2 py-1 text-[10px]">
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </>
  );
}

export function ProjectCard({
  title, href, description, dates, tags, link, image, video, links, className,
}: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const isMobile = useIsMobile();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleCardClick = () => {
    if (isMobile) {
      setDrawerOpen(true);
    } else {
      dialogRef.current?.showModal();
    }
  };

  return (
    <>
      <Card
        className="flex flex-col overflow-hidden border hover:shadow-lg hover:-translate-y-1 transition-all duration-100 ease-out h-full cursor-pointer"
        onClick={handleCardClick}
      >
        {video && (
          <video
            src={video}
            autoPlay loop muted playsInline
            preload="metadata"
            disablePictureInPicture
            {...({ 'webkit-playsinline': 'true' } as any)}
            className="pointer-events-none mx-auto h-40 w-full object-cover object-top"
          />
        )}
        {image && (
          <Image
            src={image} alt={title} width={500} height={300}
            className="h-40 w-full overflow-hidden object-cover object-top"
          />
        )}
        <CardHeader className="px-2">
          <div className="space-y-1">
            <CardTitle className="mt-1 text-base">{title}</CardTitle>
            <time className="font-sans text-xs">{dates}</time>
          </div>
        </CardHeader>
        <CardContent className="mt-auto flex flex-col px-2">
          {tags && tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {tags.map((tag) => (
                <Badge className="px-1 py-0 text-[10px]" variant="secondary" key={tag}>
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
        <CardFooter className="px-2 pb-2">
          {links && links.length > 0 && (
            <div className="flex flex-row flex-wrap items-start gap-1">
              {links.map((link, idx) => (
                <Link href={link?.href} key={idx} target="_blank" onClick={(e) => e.stopPropagation()}>
                  <Badge key={idx} className="flex gap-2 px-2 py-1 text-[10px]">
                    {link.icon}
                    {link.type}
                  </Badge>
                </Link>
              ))}
            </div>
          )}
        </CardFooter>
      </Card>

      {/* Desktop: dialog */}
      <dialog
        ref={dialogRef}
        onClick={(e) => {
          if (e.target === dialogRef.current) dialogRef.current?.close();
        }}
        className="backdrop:bg-black/50 bg-transparent p-0 m-auto max-w-lg w-full open:flex open:items-center open:justify-center"
      >
        <Card className="relative w-full max-h-[85vh] overflow-y-auto border">
          <button
            onClick={() => dialogRef.current?.close()}
            className="absolute top-3 right-3 z-10 text-muted-foreground hover:text-foreground transition-colors bg-background/80 backdrop-blur-sm rounded-full p-1 focus:outline-none"
          >
            <X className="size-4" />
          </button>
          <ProjectDetailContent
            title={title} dates={dates} description={description}
            tags={tags} links={links} video={video} image={image}
          />
        </Card>
      </dialog>

      {/* Mobile: drawer */}
      <Drawer.Root open={drawerOpen} onOpenChange={setDrawerOpen} noBodyStyles>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/50 z-40" />
          <Drawer.Content className="fixed bottom-0 left-0 right-0 z-50 flex flex-col rounded-t-2xl bg-background max-h-[95vh] overflow-hidden">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 z-10 h-1 w-10 rounded-full bg-white/50" />
            <div className="overflow-y-auto pb-20">
              <ProjectDetailContent
                title={title} dates={dates} description={description}
                tags={tags} links={links} video={video} image={image}
              />
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </>
  );
}
