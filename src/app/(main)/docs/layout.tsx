import { ScrollFadeEdges } from '../../../../registry/blocks/shared/scroll-fade-edges'
import { docsSanitySections, getStartedSections } from '@/data/docs/sections'
import { blocks } from '@/lib/catalog'

import { DocsPrevNext } from './components/docs-prev-next'
import { NavBlockSection, NavSection } from './components/nav-section'

export const dynamic = 'force-static'
export const revalidate = false

const docsPagesOrdered = [
  ...getStartedSections,
  ...docsSanitySections,
  ...blocks.flatMap((b) =>
    b.blocks.map((sb) => ({
      name: sb.name,
      href: `/docs/${b.slug}/${sb.slug}`,
    })),
  ),
]

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className=":grid-cols-[18rem_1fr] container-page grid grid-cols-1 gap-5 px-5 py-6 md:grid-cols-[17rem_1fr]">
      <aside className="sticky top-[80px] z-40 col-span-1 hidden h-[calc(100vh-120px)] md:flex md:flex-col">
        {/* <h2 className="text-foreground border-border/50 shrink-0 border-b pb-2 text-lg font-semibold">
          docs
        </h2> */}
        <ScrollFadeEdges
          scrollClassName="no-scrollbar pt-6 pb-3  pr-5 pl-1"
          gradientFrom="from-background"
          fadeHeight={70}
          bottomThreshold={8}
        >
          <nav className="mb-5">
            <h2 className="text-muted-foreground mb-2 ml-1.5 text-xs font-medium">
              Get Started
            </h2>
            <div className="flex flex-col gap-1">
              {getStartedSections.map((section) => (
                <NavSection section={section} key={section.href} />
              ))}
            </div>
          </nav>
          <nav className="mb-5">
            <h2 className="text-muted-foreground mb-2 ml-1.5 text-xs font-medium">
              Sanity
            </h2>
            <div className="flex flex-col gap-1">
              {docsSanitySections.map((section) => (
                <NavSection section={section} key={section.href} />
              ))}
            </div>
          </nav>
          <nav className="space-y-6">
            {blocks.map((block) => (
              <div key={block.slug} className="space-y-2">
                <h3 className="text-muted-foreground ml-1.5 text-xs font-medium">
                  {block.category}
                </h3>
                <div className="flex flex-col gap-0.5">
                  {block.blocks.map((subBlock) => (
                    <NavBlockSection
                      section={{
                        name: subBlock.name,
                        href: `/docs/${block.slug}/${subBlock.slug}`,
                        image: subBlock.image,
                        hasNew: subBlock.hasNew,
                      }}
                      key={subBlock.slug}
                    />
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </ScrollFadeEdges>
      </aside>
      <div className="col-span-1 my-4 min-w-0">
        {children}
        <DocsPrevNext pages={docsPagesOrdered} />
      </div>
    </main>
  )
}
