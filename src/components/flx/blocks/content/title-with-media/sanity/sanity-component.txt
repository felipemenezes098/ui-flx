import Balancer from "react-wrap-balancer";
import { createImageUrlBuilder } from "@sanity/image-url";

import { Blocks } from "@/sanity.types";
import { client } from "@/sanity/client";
import Image from "next/image";

type ContentTitleWithMediaBlock = Extract<
  Blocks[number],
  { _type: "contentTitleWithMedia" }
>;

interface TitleWithMediaProps {
  block: ContentTitleWithMediaBlock;
}

const builder = createImageUrlBuilder(client);

export function TitleWithMedia({ block }: Readonly<TitleWithMediaProps>) {
  const imageUrl = block.media?.asset ? builder.image(block.media).url() : null;

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        {block.title && (
          <h2 className="text-center text-2xl font-bold">
            <Balancer balance={0.5}>{block.title}</Balancer>
          </h2>
        )}
      </div>
      {imageUrl && (
        <div className="relative min-h-96 w-full overflow-hidden rounded-lg">
          <Image
            src={imageUrl}
            alt={block.title ?? "Title With Media Image"}
            className="h-full w-full object-cover"
            fill
          />
        </div>
      )}
    </div>
  );
}
