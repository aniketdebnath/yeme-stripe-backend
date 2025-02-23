export const metadata = {
  title: "YEME Payment",
  description: "Streamlined payment experience with YEME",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
