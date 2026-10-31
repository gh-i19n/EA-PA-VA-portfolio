import { ArrowUpRight } from "lucide-react";
import { EditorialPageIntro } from "~/components/ui/editorial-page-intro";
import { EmailEnquiry } from "~/components/ui/email-enquiry";
import { ContactChannels } from "~/components/ui/contact-channels";
import { siteContact } from "~/config/site";

export function ContactPage() {
  return (
    <>
      <EditorialPageIntro
        label="Contact"
        title={"Let's make\nroom."}
        description="Tell me what is taking your attention, what you would like to delegate and what a better working day would look like."
      />
      <section
        className="mx-auto grid w-[calc(100%-2.5rem)] max-w-[1440px] gap-10 pb-16 sm:w-[calc(100%-5rem)] sm:pb-28 lg:grid-cols-[.85fr_1.15fr] lg:gap-24"
        aria-label="Start a conversation"
      >
        <aside className="min-w-0 lg:pt-5">
          <h2 className="font-display font-medium max-w-[380px] text-[clamp(30px,3.8vw,54px)] leading-[1.1] tracking-[-.035em]">
            Start with what
            <br />
            needs your attention.
          </h2>
          <p className="mb-9 mt-6 max-w-[330px] text-body text-muted">
            A few lines about your role, the support you need and how you prefer
            to work are enough to begin.
          </p>
          <a
            className="inline-flex min-h-12 max-w-full flex-wrap items-center gap-x-8 gap-y-3 pb-3 text-xl tracking-[-.03em]"
            href={siteContact.mailto}
          >
            <span className="min-w-0 break-all">{siteContact.email}</span>
            <ArrowUpRight size={20} strokeWidth={1.3} aria-hidden="true" />
          </a>
          <div className="mt-3">
            <ContactChannels label="Connect with AY" />
          </div>
          <div className="mt-10 max-w-[320px] pt-6">
            <h3 className="font-medium mb-3 text-label">The first conversation</h3>
            <p className="text-body text-muted">
              We discuss your priorities, the responsibilities you want to hand
              over and the working rhythm that would help you most.
            </p>
          </div>
        </aside>
        <EmailEnquiry
          recipient={siteContact.email}
          topics={[
            "Ongoing executive support",
            "Calendar & communication",
            "Operations & project coordination",
            "Travel & personal assistance",
            "A combination of support",
          ]}
        />
      </section>
    </>
  );
}
