export default function Accordion({ children, className = '' }) {
  return (
    <>
      <div
        className={`bg-base-200 perfect-center rounded-lg p-2 lg:rounded-xl lg:p-4 ${className}`}>
        <div className='d-join d-join-vertical size-full'>{children}</div>
      </div>
    </>
  );
}
