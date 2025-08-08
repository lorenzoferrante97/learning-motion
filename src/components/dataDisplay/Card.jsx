export default function Card({
  title = 'card title',
  children,
  className = '',
  titleClasses = '',
  imgClasses = '',
}) {
  return (
    <div
      className={`d-card bg-base-100 border-base-300 rounded-lg border p-2 shadow-sm ${className}`}>
      <figure className={`w-full overflow-hidden rounded-md ${imgClasses}`}>
        <img
          className='image-responsive'
          src='https://img.daisyui.com/images/profile/demo/batperson@192.webp'
          alt='avatar'
        />
      </figure>
      <div className='d-card-body w-full'>
        <span className={`d-card-title ${titleClasses}`}>{title}</span>
        {children}
      </div>
    </div>
  );
}
