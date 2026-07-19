import Link from "next/link";

export default function NotFound() {
  return (
    <div className="shell flex min-h-[70vh] flex-col items-start justify-center pt-24">
      <p className="eyebrow flex items-center gap-3">
        <span className="status-dot alert" aria-hidden />
        404 · Record not found
      </p>
      <h1 className="mt-6 max-w-2xl font-display text-3xl leading-tight text-body md:text-4xl">
        This entry does not exist in the registry.
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist">
        Whatever you were looking for has either moved or does not exist. Let us
        get you back to something real.
      </p>
      <div className="mt-10 flex gap-4">
        <Link href="/" className="btn-primary">
          Return home <span aria-hidden>→</span>
        </Link>
        <Link href="/systems" className="btn-ghost">
          Systems
        </Link>
      </div>
    </div>
  );
}
