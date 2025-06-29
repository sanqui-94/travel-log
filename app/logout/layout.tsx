export default function LogoutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">{children}</div>
    </div>
  );
}
