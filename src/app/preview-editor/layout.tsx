export default function PreviewEditorLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <style>{`html { scrollbar-width: none; -ms-overflow-style: none; } html::-webkit-scrollbar { display: none; }`}</style>
      {children}
    </>
  )
}
