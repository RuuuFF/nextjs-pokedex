export default function Picture({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <picture>
      <img className={className} src={src} alt={alt} />
    </picture>
  );
}
