export default function Tooltip({ children, tooltipContent, className = '' }) {
  return (
    <div className={`lg:d-tooltip w-fit ${className}`}>
      <div className='d-tooltip-content'>{tooltipContent}</div>
      {children}
    </div>
  );
}
