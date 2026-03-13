export default function LoadingSkeleton() {
  return (
    <div
      className="rounded-2xl overflow-hidden animate-fade-in"
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border-subtle)",
        boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
      }}
    >
      {/* Header skeleton */}
      <div
        className="px-6 pt-6 pb-4"
        style={{ borderBottom: "1px solid var(--border-subtle)" }}
      >
        <div
          className="shimmer-line h-3 w-24 mb-3"
          style={{ borderRadius: "4px" }}
        />
        <div
          className="shimmer-line h-7 w-48"
          style={{ borderRadius: "6px" }}
        />
      </div>

      {/* Body skeleton */}
      <div className="px-6 py-5 space-y-3">
        <div className="shimmer-line h-4 w-full" />
        <div className="shimmer-line h-4 w-5/6" />
        <div className="shimmer-line h-4 w-full" />
        <div className="shimmer-line h-4 w-4/5" />
        <div className="shimmer-line h-4 w-full" />
        <div className="shimmer-line h-4 w-3/4" />
      </div>

      {/* Generating indicator */}
      <div
        className="px-6 pb-5 flex items-center gap-3"
        style={{ color: "var(--accent-gold)" }}
      >
        <span
          className="inline-block w-4 h-4 rounded-full border-2 border-current border-t-transparent spin-slow"
          aria-hidden="true"
        />
        <span
          className="text-sm"
          style={{
            color: "var(--accent-soft)",
            fontFamily: "var(--font-dm-sans)",
          }}
        >
          Generating explanation…
        </span>
      </div>
    </div>
  );
}