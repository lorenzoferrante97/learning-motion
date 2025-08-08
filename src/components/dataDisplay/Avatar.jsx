export default function Avatar({
  src = 'https://img.daisyui.com/images/profile/demo/batperson@192.webp',
  alt = 'alt text',
  className = '',
}) {
  return (
    <div className={`d-avatar ${className}`}>
      <figure className='min-w-5 overflow-hidden rounded-full'>
        <img className='image-responsive' src={src} alt={alt} />
      </figure>
    </div>
  );
}
