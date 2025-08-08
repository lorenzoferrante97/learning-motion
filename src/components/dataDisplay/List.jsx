export default function List({
  title,
  titleClasses = '',
  children,
  className = '',
}) {
  return (
    <>
      <div
        className={`bg-base-200 perfect-center rounded-lg p-2 lg:rounded-xl lg:p-4 ${className}`}>
        <ul className='d-list bg-base-100 border-base-300 size-full rounded-md border shadow-md lg:rounded-lg'>
          {title && <li className={`p-4 ${titleClasses}`}>{title}</li>}
          {children}
        </ul>
      </div>
    </>
  );
}
