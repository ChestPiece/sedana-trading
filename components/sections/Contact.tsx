"use client";

import { FormEvent, useState } from "react";
import {
  abuDhabiContact,
  FORMSPREE_ENDPOINT,
  interestOptions,
  locations,
} from "@/lib/data";

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (FORMSPREE_ENDPOINT.includes("PLACEHOLDER")) {
      // TODO: set NEXT_PUBLIC_FORMSPREE_ENDPOINT before launch
      setStatus("success");
      form.reset();
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("submit failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="section-pad-lg bg-surface"
      aria-labelledby="contact-heading"
    >
      <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="reveal lg:col-span-5">
          <p className="meta-label">Contact</p>
          <h2
            id="contact-heading"
            className="mt-4 text-balance text-3xl font-bold tracking-tight text-navy md:text-4xl"
          >
            Speak with the Sedana team.
          </h2>
          <p className="mt-5 max-w-[40ch] text-base leading-relaxed text-ink-2 text-pretty">
            Tell us about your facility, equipment requirement or support need.
            We will respond from Abu Dhabi.
          </p>

          <div className="mt-10 space-y-6 border border-navy/15 bg-white p-6">
            <div>
              <p className="meta-label">Address</p>
              <address className="mt-2 not-italic text-sm leading-relaxed text-ink-2">
                <strong className="block text-navy">
                  {abuDhabiContact.company}
                </strong>
                {abuDhabiContact.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>
            <div className="border-t border-surface-2 pt-5">
              <p className="meta-label">Phone</p>
              <a
                href={abuDhabiContact.phoneHref}
                className="mt-2 block text-sm font-medium text-navy hover:underline"
              >
                {abuDhabiContact.phone}
              </a>
            </div>
            <div className="border-t border-surface-2 pt-5">
              <p className="meta-label">Email</p>
              <a
                href={abuDhabiContact.emailHref}
                className="mt-2 block text-sm text-ink-2 hover:text-navy"
              >
                {abuDhabiContact.email}
              </a>
            </div>
            <div className="border-t border-surface-2 pt-5">
              <p className="meta-label">Network</p>
              <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
                {locations.map((loc) => (
                  <li key={loc.id} className="text-sm text-ink-2">
                    {loc.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="reveal lg:col-span-7">
          <form
            onSubmit={onSubmit}
            className="border border-navy/15 bg-white p-6 md:p-8"
            noValidate
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" required autoComplete="name" />
              <Field
                label="Company"
                name="company"
                required
                autoComplete="organization"
              />
              <Field
                label="Email"
                name="email"
                type="email"
                required
                autoComplete="email"
              />
              <Field
                label="Phone"
                name="phone"
                type="tel"
                autoComplete="tel"
              />
              <div className="sm:col-span-2">
                <label
                  htmlFor="interest"
                  className="block text-sm font-medium text-navy"
                >
                  Interest
                </label>
                <select
                  id="interest"
                  name="interest"
                  required
                  defaultValue=""
                  className="mt-2 h-11 w-full rounded-[4px] border border-navy/20 bg-white px-3 text-sm text-ink outline-none transition-colors focus:border-navy"
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  {interestOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-navy"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="mt-2 w-full resize-y rounded-[4px] border border-navy/20 bg-white px-3 py-2.5 text-sm text-ink outline-none transition-colors focus:border-navy"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="btn-primary disabled:opacity-60"
              >
                {status === "submitting" ? "Sending…" : "Send enquiry"}
              </button>
              <p className="text-xs text-muted" role="status" aria-live="polite">
                {status === "success" &&
                  "Enquiry received. We will respond shortly."}
                {status === "error" &&
                  "Could not send. Please email info@sedana-ad.ae."}
                {status === "idle" &&
                  "We respond to qualified industrial enquiries."}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-navy">
        {label}
        {required ? "" : <span className="text-muted"> (optional)</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="mt-2 h-11 w-full rounded-[4px] border border-navy/20 bg-white px-3 text-sm text-ink outline-none transition-colors focus:border-navy"
      />
    </div>
  );
}
