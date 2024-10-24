import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* LEFT */}
      <div className="w-1/6 bg-red-200 md:w-[14%] lg:w-[16%] xl:w-[14%]">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 lg:justify-start lg:p-4"
        >
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block ">SchooLama</span>
        </Link>
        <Menu></Menu>
      </div>
      {/* RIGHT */}
      <div className="w-5/6 bg-blue-200 md:w-[86%] lg:w-[84%] xl:w-[86%]">
        right
      </div>
    </div>
  );
}
