import { contactServiceGroups } from "@/lib/site-content";

export default function ContactServicesList() {
  return (
    <div className="rounded-2xl border-2 border-gold bg-black/80 p-6 surface-texture">
      <p className="text-xs tracking-[0.25em] text-gold uppercase">Services</p>
      <div className="mt-4 flex flex-col gap-5">
        {contactServiceGroups.map((group) => (
          <div key={group.category}>
            <p className="text-sm font-semibold tracking-wide text-gold">
              {group.category}
            </p>
            <ul className="mt-2 flex flex-col gap-1.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="text-sm font-medium text-white before:mr-2 before:text-gold before:content-['•']"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
