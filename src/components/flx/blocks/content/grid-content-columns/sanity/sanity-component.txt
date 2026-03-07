import Balancer from "react-wrap-balancer";
import { createImageUrlBuilder } from "@sanity/image-url";
import Image from "next/image";

import { Cta } from "@/components/flx/sanity/shared/cta";
import { Blocks } from "@/sanity.types";
import { client } from "@/sanity/client";

type ContentGridContentColumnsBlock = Extract<
  Blocks[number],
  { _type: "contentGridContentColumns" }
>;

interface GridContentColumnsProps {
  block: ContentGridContentColumnsBlock;
}

const builder = createImageUrlBuilder(client);

export function GridContentColumns({
  block,
}: Readonly<GridContentColumnsProps>) {
  if (!block.items || block.items.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {block.items.map((item, index) => {
        const imageUrl = item.media?.asset
          ? builder.image(item.media).url()
          : null;

        return (
          <div key={`${item.title}-${index}`} className="space-y-5">
            {imageUrl && (
              <div className="relative h-64 w-full overflow-hidden rounded-lg">
                <Image
                  src={imageUrl}
                  alt={item.title ?? "Grid content columns image"}
                  className="h-full w-full object-cover"
                  fill
                />
              </div>
            )}

            <div className="space-y-2">
              {item.title && (
                <h3 className="text-xl font-medium">{item.title}</h3>
              )}
              {item.content && (
                <p className="text-muted-foreground whitespace-pre-line">
                  <Balancer balance={0.5}>{item.content}</Balancer>
                </p>
              )}
            </div>

            {item.cta && <Cta cta={item.cta} />}
          </div>
        );
      })}
    </div>
  );
}
