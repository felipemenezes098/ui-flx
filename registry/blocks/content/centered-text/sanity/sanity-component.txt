import Balancer from "react-wrap-balancer";

import { Cta } from "@/components/flx/sanity/shared/cta";
import { cn } from "@/lib/utils";
import { Blocks } from "@/sanity.types";

type ContentCenteredTextBlock = Extract<
  Blocks[number],
  { _type: "contentCenteredText" }
>;

interface CenteredTextProps {
  block: ContentCenteredTextBlock;
}

export function CenteredText({ block }: Readonly<CenteredTextProps>) {
  return (
    <div
      className={cn(
        "bg-muted/50 flex min-h-120 items-center justify-center p-5 rounded-xl"
      )}
    >
      <div className="flex flex-col items-center space-y-4 self-center">
        <div className="space-y-2">
          {block.title && (
            <h2 className="text-center text-2xl font-bold md:max-w-200">
              <Balancer balance={0.5}>{block.title}</Balancer>
            </h2>
          )}
          {block.description && (
            <p className="text-center text-muted-foreground whitespace-pre-line md:max-w-200">
              <Balancer balance={0.5}>{block.description}</Balancer>
            </p>
          )}
        </div>
        {block.cta && <Cta cta={block.cta} />}
      </div>
    </div>
  );
}
