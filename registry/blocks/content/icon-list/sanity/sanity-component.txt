"use client";

import { Icon } from "../shared/dynamic-icon";

import { Blocks } from "@/sanity.types";
import { icons } from "lucide-react";

type ContentIconListBlock = Extract<
  Blocks[number],
  { _type: "contentIconList" }
>;

interface IconListProps {
  block: ContentIconListBlock;
}

export function IconList({ block }: Readonly<IconListProps>) {
  const title = block.title;
  const items = block.items ?? [];

  return (
    <div className="grid w-full">
      <h2 className="text-foreground mb-8 text-2xl text-pretty md:text-3xl">
        {title}
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <div className="flex items-center gap-3" key={item._key ?? index}>
            <Icon
              name={item.icon as keyof typeof icons}
              className="text-primary size-4 shrink-0"
            />
            <h3 className="text-base font-medium">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
