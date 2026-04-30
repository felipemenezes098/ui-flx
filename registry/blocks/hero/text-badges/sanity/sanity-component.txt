import Balancer from "react-wrap-balancer";

import { Cta } from "@/components/flx/sanity/shared/cta";
import { Blocks } from "@/sanity.types";
import { Badge } from "@/components/ui/badge";

type HeroTextBadgesBlock = Extract<Blocks[number], { _type: "heroTextBadges" }>;

interface TextBadgesProps {
  block: HeroTextBadgesBlock;
}

export function TextBadges({ block }: Readonly<TextBadgesProps>) {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 text-center min-h-60">
      {block.title && (
        <h1 className="max-w-2xl text-3xl font-bold sm:text-4xl">
          <Balancer balance={0.5}>{block.title}</Balancer>
        </h1>
      )}

      <div className="flex flex-col gap-3 sm:flex-row">
        {block.primaryCTA && (
          <Cta className="w-full sm:w-fit" cta={block.primaryCTA} />
        )}
        {block.secondaryCTA && (
          <Cta className="w-full sm:w-fit" cta={block.secondaryCTA} />
        )}
      </div>

      {block.features && block.features.length > 0 && (
        <ul className="m-0 flex list-none flex-wrap justify-center gap-3 mt-3">
          {block.features.map((feature, index) => (
            <Badge key={`${feature.title}-${index}`} variant="secondary">
              {feature.title}
            </Badge>
          ))}
        </ul>
      )}
    </div>
  );
}
