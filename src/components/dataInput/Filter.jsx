export default function Filter({ children, className = '' }) {
  return (
    <form
      className={`d-filter bg-base-200 *:bg-base-100 *:first:bg-base-300 *:not-first:border-base-300 w-fit rounded-lg p-2 *:rounded-md *:not-first:border *:first:rounded-full ${className}`}>
      <input className='d-btn d-btn-square' type='reset' value='x' />
      {children}
    </form>
  );
}
