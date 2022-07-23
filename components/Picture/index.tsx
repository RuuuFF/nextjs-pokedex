interface PictureProps {
  src: string;
  alt: string;
  className?: string;
}

export default function Picture({ src, alt, className }: PictureProps) {
  return (
    <picture>
      <img className={className} src={src} alt={alt} loading="lazy" />
    </picture>
  );
}
