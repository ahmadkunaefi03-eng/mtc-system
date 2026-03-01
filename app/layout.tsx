export const metadata = {
  title: "MTC System",
  description: "Maintenance Control System"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}
