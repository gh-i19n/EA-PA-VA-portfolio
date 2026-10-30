import Link from "next/link";
import { EditorialPageIntro } from "~/components/ui/editorial-page-intro";

export default function NotFound() {
  return (
    <>
      <EditorialPageIntro
        label="Page not found"
        title={"Page not\nfound."}
        description="That page is no longer here, or the address may be incomplete. You can find your way back from here."
      />
      <div className="mx-auto my-12 flex w-[calc(100%-2.75rem)] max-w-[1220px] flex-wrap gap-x-8 gap-y-4 sm:w-[calc(100%-4rem)]">
        <Link
          className="border-b border-rule pb-2 text-sm hover:border-ledger"
          href="/"
        >
          Return home
        </Link>
        <Link
          className="border-b border-rule pb-2 text-sm hover:border-ledger"
          href="/case-studies"
        >
          Explore case studies
        </Link>
      </div>
    </>
  );
}
