import Link from "next/link";
import Image from "next/image";

import { Navigation } from "./navigation";
import { DottedSeparator } from "./dotted-separator";

export const Sidebar = () => {
  return (
    <aside className="h-full bg-neutral-100 p-4 w-full">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Logo"
          width={150}
          height={50}
          className="h-8 w-auto"
          priority
        />
      </Link>
      <DottedSeparator className="my-4" />
      <Navigation />
    </aside>
  );
};