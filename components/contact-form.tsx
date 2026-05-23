import { services, site } from "@/lib/site-content";

type ContactFormProps = {
  accessKey: string;
  redirectUrl: string;
};

export default function ContactForm({
  accessKey,
  redirectUrl,
}: ContactFormProps) {
  return (
    <form
      action="https://api.web3forms.com/submit"
      method="POST"
      className="mt-10 flex flex-col gap-5"
    >
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
      <input type="hidden" name="redirect" value={redirectUrl} />
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
        <label
          key={field.name}
          className="flex flex-col gap-2 text-xs font-medium tracking-[0.15em] text-gold uppercase"
        >
          {field.label}
          <input
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            required={field.required}
            className="rounded-xl border-2 border-gold/30 bg-surface px-4 py-3 text-base font-normal tracking-normal text-white normal-case outline-none transition placeholder:text-white/40 focus:border-gold focus:ring-1 focus:ring-gold/50"
          />
        </label>
      ))}

      <label className="flex flex-col gap-2 text-xs font-medium tracking-[0.15em] text-gold uppercase">
        Project Details
        <textarea
          name="message"
          rows={5}
          required
          placeholder="Property type, location, and services needed (e.g. asphalt sealing, cut removal & pave, interlock sealing, parking lot maintenance)..."
          className="rounded-xl border-2 border-gold/30 bg-surface px-4 py-3 text-base font-normal tracking-normal text-white normal-case outline-none transition placeholder:text-white/40 focus:border-gold focus:ring-1 focus:ring-gold/50"
        />
      </label>

      <button
        type="submit"
        className="mt-2 w-fit rounded-full bg-gold px-8 py-3 text-sm font-medium text-black transition hover:bg-gold-light"
      >
        Request Free Estimate
      </button>
    </form>
  );
}
