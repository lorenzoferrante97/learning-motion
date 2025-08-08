export default function ImgMask({
  mask = 'circle',
  className = '',
  alt = 'alt text',
  src,
}) {
  const fallbackImg = 'https://picsum.photos/seed/picsum/720/720';

  const maskClass =
    mask === 'squircle'
      ? 'd-mask-squircle'
      : mask === 'heart'
        ? 'd-mask-heart'
        : mask === 'hexagon'
          ? 'd-mask-hexagon'
          : mask === 'hexagon 2'
            ? 'd-mask-hexagon-2'
            : mask === 'decagon'
              ? 'd-mask-decagon'
              : mask === 'pentagon'
                ? 'd-mask-pentagon'
                : mask === 'diamond'
                  ? 'd-mask-diamond'
                  : mask === 'star'
                    ? 'd-mask-star-2'
                    : mask === 'triangle'
                      ? 'd-mask-triangle'
                      : mask === 'triangle down'
                        ? 'd-mask-triangle-2'
                        : mask === 'triangle left'
                          ? 'd-mask-triangle-3'
                          : mask === 'triangle right'
                            ? 'd-mask-triangle-4'
                            : mask === 'hexagon'
                              ? 'd-mask-hexagon'
                              : 'd-mask-circle';

  return (
    <figure
      className={`d-mask min-w-5 overflow-hidden ${maskClass} ${className}`}>
      <img className='image-responsive' src={src || fallbackImg} alt={alt} />
    </figure>
  );
}
