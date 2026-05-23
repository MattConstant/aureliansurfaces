type FormSuccessBannerProps = {
  show: boolean;
};

export default function FormSuccessBanner({ show }: FormSuccessBannerProps) {
  if (!show) return null;

  return (
    <div
      role="status"
      className="mb-8 rounded-2xl border-2 border-gold/50 bg-gold/10 px-6 py-4 text-center"
    >
      <p className="font-medium text-white">
        Thank you! Your message was sent successfully.
      </p>
      <p className="mt-1 text-sm text-white/80">
        We&apos;ll get back to you with your free estimate soon.
      </p>
    </div>
  );
}
