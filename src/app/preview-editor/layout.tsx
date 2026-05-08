export default function PreviewEditorLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <style>{`html, body { overflow: auto; scrollbar-width: none; -ms-overflow-style: none; } body::-webkit-scrollbar { display: none; }`}</style>
      {children}
    </>
  )
}
