import { photos, type PhotoName } from '../data/photos'

export function Photo({
  name,
  alt = '',
  sizes = '(min-width: 1024px) 50vw, 100vw',
  priority = false,
  className,
}: {
  name: PhotoName
  alt?: string
  sizes?: string
  priority?: boolean
  className?: string
}) {
  const { w, h } = photos[name]
  return (
    <img
      className={className}
      src={`/img/${name}-1024.webp`}
      srcSet={`/img/${name}-800.webp 800w, /img/${name}-1024.webp 1024w`}
      sizes={sizes}
      width={w}
      height={h}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchPriority={priority ? 'high' : undefined}
    />
  )
}
