import { StructuredData } from "@/components/structured-data";
import { HomePage } from "@/features/home/home-page";
import { buildHomeMetadata } from "@/lib/seo";

export const metadata = buildHomeMetadata();

export default function Page() {
  return (
    <>
      <StructuredData />
      <HomePage />
    </>
  );
}
