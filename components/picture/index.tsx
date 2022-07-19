export default function Picture({ src, alt, className }: any) {
  return (
    <picture>
      <img className={className} src={src} alt={alt} />
    </picture>
  );
}
