"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site-content";

type ContactFormProps = {
  accessKey: string;
};

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

type Web3FormsResponse = {
  success?: boolean;
  message?: string;
};

export default function ContactForm({ accessKey }: ContactFormProps) {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError(null);

    const form = event.currentTarget;
    const body = new FormData(form);

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body,
      });

      const raw = await response.text();
      let json: Web3FormsResponse | null = null;
      try {
        json = raw ? (JSON.parse(raw) as Web3FormsResponse) : null;
      } catch {
        throw new Error(
          "Something went wrong while sending your message. Please try again.",
        );
      }

      if (!response.ok || json?.success !== true) {
        throw new Error(
          json?.message ??
            "Something went wrong while sending your message. Please try again.",
        );
      }

      form.reset();
      setSuccess(true);
    } catch (err) {
      setSuccess(false);
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong while sending your message. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  function handleSendAnother() {
    setSuccess(false);
    setError(null);
  }

  if (success) {
    return (
      <div className="mt-10 rounded-2xl border-2 border-gold/40 bg-black/60 p-8 text-center">
        <p className="text-base leading-7 text-white/90">
          Thank you! We received your quote request and will get back to you
          shortly.
        </p>
        <button
          type="button"
          onClick={handleSendAnother}
          className="mt-6 rounded-full bg-gold px-8 py-3 text-sm font-medium text-black transition hover:bg-gold-light"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputClasses =
    "rounded-xl border-2 border-gold/30 bg-surface px-4 py-3 text-base font-normal tracking-normal text-white normal-case outline-none transition placeholder:text-white/40 focus:border-gold focus:ring-1 focus:ring-gold/50";

  const labelClasses =
    "flex flex-col gap-2 text-xs font-medium tracking-[0.15em] text-gold uppercase";

  return (
    <form className="mt-10 flex flex-col gap-5" onSubmit={handleSubmit}>
      <input type="hidden" name="access_key" value={accessKey} />
      <input
        type="hidden"
        name="subject"
        value={`New quote request - ${site.legalName}`}
      />
      <input
        type="hidden"
        name="from_name"
        value={`${site.legalName} Website`}
      />
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {[
        {
          name: "name",
          label: "Name",
          type: "text",
          placeholder: "Your full name",
          required: true,
        },
        {
          name: "email",
          label: "Email",
          type: "email",
          placeholder: site.email,
          required: true,
        },
        {
          name: "phone",
          label: "Phone",
          type: "tel",
          placeholder: site.phone,
          required: false,
        },
      ].map((field) => (
        <label key={field.name} className={labelClasses}>
          {field.label}
          <input
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            required={field.required}
            disabled={submitting}
            className={`${inputClasses} disabled:cursor-not-allowed disabled:opacity-60`}
          />
        </label>
      ))}

      <label className={labelClasses}>
        Message
        <textarea
          name="message"
          rows={5}
          required
          disabled={submitting}
          placeholder="Property type, location, and services needed (e.g. asphalt sealing, cut removal & pave, interlock sealing, parking lot maintenance)..."
          className={`${inputClasses} min-h-[8rem] resize-y disabled:cursor-not-allowed disabled:opacity-60`}
        />
      </label>

      {error ? (
        <p
          className="text-sm text-red-300"
          role="alert"
          aria-live="polite"
        >
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={submitting}
        className="mt-2 w-fit rounded-full bg-gold px-8 py-3 text-sm font-medium text-black transition hover:bg-gold-light disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting ? "Sending..." : "Request Free Estimate"}
      </button>
    </form>
  );
}