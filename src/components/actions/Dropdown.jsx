export default function Dropdown({
  children,
  summaryClasses = '',
  className = '',
  trigger,
}) {
  return (
    <details className={`d-dropdown ${className}`}>
      <summary className={`d-btn mb-1 rounded-md ${summaryClasses}`}>
        {trigger}
      </summary>
      <ul className='d-menu d-dropdown-content bg-base-200 border-base-300 *:lg:hover:bg-base-100 **:hover:bg-base-100 z-10 w-fit min-w-52 rounded-lg border p-2 shadow-md *:flex *:w-full *:flex-row *:items-center *:rounded-md **:size-full *:max-md:min-h-12'>
        {children}
      </ul>
    </details>
  );
}
