import { ArrowUpRight } from "lucide-react";
import { EditorialPageIntro } from "~/components/ui/editorial-page-intro";
import { PortfolioLink } from "~/components/ui/portfolio-link";
import { certificates, testimonials } from "../config/credentials-content";

export function CredentialsPage() {
  return (
    <>
      <EditorialPageIntro
        label="Trust, testimonials & certificates"
        title={"A matter\nof trust."}
        description="The responsibility of executive support is personal. How information is handled, promises are followed through and decisions are escalated all matter."
      />
      <section
        className="mx-auto grid w-[calc(100%-2.5rem)] max-w-[1440px] gap-10 border-t border-rule py-10 sm:w-[calc(100%-5rem)] sm:py-16 lg:grid-cols-[1.1fr_1fr] lg:gap-24"
        aria-labelledby="trust-title"
      >
        <h2
          id="trust-title"
          className="font-display font-medium max-w-[600px] text-[clamp(34px,5.4vw,78px)] leading-[1.04] tracking-[-.035em]"
        >
          A clear way
          <br />
          of working.
        </h2>
        <div className="max-w-[470px]">
          <p className="text-[18px] leading-[1.6] tracking-[-.025em]">
            Agree the responsibility. Respect the confidence. Keep the
            commitment.
          </p>
          <p className="mb-6 mt-5 text-body text-muted">
            I work with agreed access and approval limits, treat sensitive
            information with care and keep communication clear. A dependable
            partnership is built through those everyday decisions.
          </p>
          <PortfolioLink href="/about" quiet>
            My approach to the work
          </PortfolioLink>
        </div>
      </section>
      <div className="mx-auto w-[calc(100%-2.5rem)] max-w-[1440px] pb-16 sm:w-[calc(100%-5rem)] sm:pb-28">
        <section
          id="testimonials"
          className="grid gap-7 border-t border-rule py-10 lg:grid-cols-[1.1fr_1fr] lg:gap-24"
          aria-labelledby="testimonials-title"
        >
          <h2
            id="testimonials-title"
            className="font-display font-medium text-[clamp(30px,4vw,58px)] leading-[1.1] tracking-[-.035em]"
          >
            Client perspectives.
          </h2>
          <div>
            {testimonials.length ? (
              testimonials.map((item) => (
                <figure className="mb-8" key={item.name}>
                  <blockquote className="text-[24px] leading-[1.5] tracking-[-.03em]">
                    “{item.quote}”
                  </blockquote>
                  <figcaption className="mt-6 text-label">
                    {item.name}
                    <span className="mt-2 block text-caption text-muted">
                      {item.role}
                    </span>
                  </figcaption>
                </figure>
              ))
            ) : (
              <p className="max-w-[410px] text-body text-muted">
                Approved client testimonials have not been supplied for this
                preview. This space is reserved for feedback shared with
                permission.
              </p>
            )}
          </div>
        </section>
        <section
          id="certificates"
          className="grid gap-7 border-t border-rule py-10 lg:grid-cols-[1.1fr_1fr] lg:gap-24"
          aria-labelledby="certificates-title"
        >
          <h2
            id="certificates-title"
            className="font-display font-medium text-[clamp(30px,4vw,58px)] leading-[1.1] tracking-[-.035em]"
          >
            Certificates & learning.
          </h2>
          <div>
            {certificates.length ? (
              certificates.map((item) => (
                <a
                  href={item.verificationUrl}
                  key={item.title}
                  target="_blank"
                  rel="noreferrer"
                  className="mb-6 flex items-center justify-between gap-6 border-b border-rule pb-6"
                >
                  <span>
                    <span className="text-xl">{item.title}</span>
                    <span className="mt-3 block text-label text-muted">
                      {item.issuer} / {item.issued}
                    </span>
                  </span>
                  <ArrowUpRight size={19} aria-hidden="true" />
                </a>
              ))
            ) : (
              <p className="max-w-[410px] text-body text-muted">
                Verified certificates will be listed with the issuing
                organisation, completion details and a verification link when
                available.
              </p>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
