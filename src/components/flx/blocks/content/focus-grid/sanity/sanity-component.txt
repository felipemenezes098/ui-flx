"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { createImageUrlBuilder } from "@sanity/image-url";

import { Blocks } from "@/sanity.types";
import { client } from "@/sanity/client";

// ─── Types (from block) ───────────────────────────────────────────────────────

type ContentFocusGridBlock = Extract<
  Blocks[number],
  { _type: "contentFocusGrid" }
>;

interface FocusGridBlockProps {
  block: ContentFocusGridBlock;
}

// ─── Constants ───────────────────────────────────────────────────────────────

const BREAKPOINTS = { md: 768, lg: 1024 } as const;
const COLS = { sm: 1, md: 2, lg: 3 } as const;
const GAP_REM = 1;

const builder = createImageUrlBuilder(client);

// ─── Hooks ───────────────────────────────────────────────────────────────────

function useColsPerRow(): number | undefined {
  const [cols, setCols] = useState<number | undefined>(undefined);

  useEffect(() => {
    const update = () => {
      const width = window.innerWidth;
      if (width >= BREAKPOINTS.lg) setCols(COLS.lg);
      else if (width >= BREAKPOINTS.md) setCols(COLS.md);
      else setCols(COLS.sm);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return cols;
}

// ─── Utilities ───────────────────────────────────────────────────────────────

function chunk<T>(array: T[], size: number): T[][] {
  return Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
    array.slice(i * size, i * size + size)
  );
}

function getItemWidth(
  isFocused: boolean,
  rowSize: number,
  hasRowFocus: boolean
): string {
  if (rowSize === 1) return "100%";
  const gapTotal = (rowSize - 1) * GAP_REM;
  if (!hasRowFocus) return `calc((100% - ${gapTotal}rem) / ${rowSize})`;
  const focusedFraction = 2 / (rowSize + 1);
  const otherFraction = (1 - focusedFraction) / (rowSize - 1);
  const fraction = isFocused ? focusedFraction : otherFraction;
  return `calc((100% - ${gapTotal}rem) * ${fraction})`;
}

// ─── Item type for UI (with resolved image URL) ───────────────────────────────

interface FocusGridItemUI {
  _key: string;
  image: string;
  title: string;
  description?: string | null;
  defaultFocus?: boolean;
}

// ─── ItemCard ─────────────────────────────────────────────────────────────────

type ItemCardProps = Readonly<{
  item: FocusGridItemUI;
  isFocused?: boolean;
  dimmed?: boolean;
  showDescription?: boolean;
  width?: string;
  onActivate?: () => void;
}>;

function ItemCard({
  item,
  isFocused = false,
  dimmed = false,
  showDescription = true,
  width,
  onActivate,
}: ItemCardProps) {
  return (
    <button
      type="button"
      onClick={onActivate}
      aria-pressed={isFocused}
      className="group flex shrink-0 cursor-pointer flex-col rounded-xl text-left transition-[width,opacity] duration-500 ease-in-out focus:ring-0 focus:outline-none"
      style={{
        ...(width !== undefined && { width }),
        ...(dimmed && { opacity: 0.4 }),
      }}
    >
      <div className="relative h-64 w-full">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="group-focus-visible:ring-ring/50 rounded-xl object-cover group-focus-visible:ring-2 group-focus-visible:outline-none"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="py-2">
        <h3 className="line-clamp-1 truncate font-semibold">{item.title}</h3>
        <AnimatePresence>
          {showDescription && item.description != null && (
            <motion.div
              key="description-wrapper"
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{
                height: 0,
                transition: {
                  duration: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                },
              }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.35,
              }}
              className="overflow-hidden"
            >
              <motion.p
                initial={{ opacity: 0, filter: "blur(6px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{
                  opacity: 0,
                  filter: "blur(6px)",
                  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.4,
                }}
                className="text-muted-foreground mt-1 line-clamp-1 text-sm"
              >
                {item.description}
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </button>
  );
}

// ─── FocusGrid (block component) ───────────────────────────────────────────────

export function FocusGrid({ block }: Readonly<FocusGridBlockProps>) {
  const title = block.title;
  const description = block.description;
  const rawItems = block.items ?? [];
  const dimUnfocused = block.dimUnfocused ?? false;
  const descriptionOnFocus = block.descriptionOnFocus ?? false;

  const items: FocusGridItemUI[] = rawItems
    .filter(
      (
        item
      ): item is typeof item & {
        image: NonNullable<typeof item.image>;
        title: string;
      } => !!item.image?.asset && !!item.title
    )
    .map((item) => ({
      _key: item._key,
      image: builder.image(item.image).url(),
      title: item.title,
      description: item.description ?? null,
      defaultFocus: item.defaultFocus ?? false,
    }));

  const [focusedIndex, setFocusedIndex] = useState(() =>
    items.findIndex((item) => item.defaultFocus)
  );
  const colsPerRow = useColsPerRow();

  const isMobile = colsPerRow === COLS.sm;
  const rows = colsPerRow === undefined ? [] : chunk(items, colsPerRow);
  const hasFocusedItem = focusedIndex !== -1;

  const toggle = (index: number) =>
    setFocusedIndex((prev) => (prev === index ? -1 : index));

  if (colsPerRow === undefined) return null;

  if (items.length === 0) return null;

  if (isMobile) {
    return (
      <div className="grid grid-cols-1 gap-4">
        {items.map((item) => (
          <ItemCard key={item._key} item={item} />
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {(title || description) && (
        <div className="flex flex-col gap-1">
          {title && <h2 className="text-2xl font-bold">{title}</h2>}
          {description && (
            <p className="text-muted-foreground">{description}</p>
          )}
        </div>
      )}
      <div className="flex flex-col gap-4">
        {rows.map((row, rowIndex) => {
          const rowStartIndex = rowIndex * colsPerRow;
          const hasRowFocus =
            focusedIndex >= rowStartIndex &&
            focusedIndex < rowStartIndex + row.length;
          const rowKey = row.map((it) => it._key).join("-");
          return (
            <div key={rowKey} className="flex gap-4">
              {row.map((item, colIndex) => {
                const globalIndex = rowStartIndex + colIndex;
                const isFocused = focusedIndex === globalIndex;
                return (
                  <ItemCard
                    key={item._key}
                    item={item}
                    isFocused={isFocused}
                    dimmed={
                      dimUnfocused &&
                      hasFocusedItem &&
                      focusedIndex !== globalIndex
                    }
                    showDescription={descriptionOnFocus ? isFocused : true}
                    width={getItemWidth(isFocused, row.length, hasRowFocus)}
                    onActivate={() => toggle(globalIndex)}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
