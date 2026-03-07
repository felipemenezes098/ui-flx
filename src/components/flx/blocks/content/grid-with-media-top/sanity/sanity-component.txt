import { createImageUrlBuilder } from "@sanity/image-url";

import { Blocks } from "@/sanity.types";
import { client } from "@/sanity/client";
import Image from "next/image";

type ContentGridWithMediaTopBlock = Extract<
  Blocks[number],
  { _type: "contentGridWithMediaTop" }
>;

interface GridWithMediaTopProps {
  block: ContentGridWithMediaTopBlock;
}

const builder = createImageUrlBuilder(client);

export function GridWithMediaTop({ block }: Readonly<GridWithMediaTopProps>) {
  const imageUrl = block.media?.asset ? builder.image(block.media).url() : null;

  return (
    <div className="space-y-8">
      {imageUrl && (
        <div className="relative max-h-140 min-h-96 w-full overflow-hidden rounded-lg">
          <Image
            src={imageUrl}
            alt={block.title ?? "Grid With Media Top Image"}
            className="h-full w-full object-cover"
            fill
          />
        </div>
      )}

      {block.items && block.items.length > 0 && (
        <ul className="m-0 grid list-none grid-cols-1 gap-6 p-0 md:grid-cols-2 lg:grid-cols-3">
          {block.items.map((item, index) => (
            <li key={`${item.title}-${index}`} className="flex flex-col gap-2">
              {item.title && (
                <h3 className="font-medium text-lg">{item.title}</h3>
              )}
              {item.description && (
                <p className="text-muted-foreground max-w-md text-sm">
                  {item.description}
                </p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
