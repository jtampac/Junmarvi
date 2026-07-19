import Reveal from "@/components/Reveal";

export default function PageHeader({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <div className="shell pb-16 pt-36 md:pb-20 md:pt-44">
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.1] text-body md:text-5xl">
          {title}
        </h1>
        {lede && (
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-mist">{lede}</p>
        )}
      </Reveal>
    </div>
  );
}
