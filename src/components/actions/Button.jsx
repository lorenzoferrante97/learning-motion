// add colors to className for specific styles
// keyboard style -> border-accent-content/75 hover:border-accent-content/50 active:border-accent-content

export default function Button({
  role,
  type,
  className = '',
  style,
  isDisabled = false,
  children,
  onClick = () => {},
}) {
  const styleClasses =
    style === 'keyboard'
      ? 'transition-base box-content rounded-md border-0 border-b-4 hover:-translate-y-[2px] hover:border-b-[6px] hover:brightness-[115%] active:border-b-2 active:brightness-100'
      : '';

  const roleClass =
    role === 'primary'
      ? 'd-btn-primary'
      : role === 'secondary' || role === 'sec'
        ? 'd-btn-secondary'
        : role === 'accent'
          ? 'd-btn-accent'
          : role === 'error'
            ? 'd-btn-error'
            : role === 'warning'
              ? 'd-btn-warning'
              : role === 'success'
                ? 'd-btn-success'
                : role === 'info'
                  ? 'd-btn-info'
                  : 'd-btn-neutral';
  const typeClass =
    type === 'outline'
      ? 'd-btn-outline'
      : type === 'ghost'
        ? 'd-btn-ghost'
        : type === 'link'
          ? 'd-btn-link'
          : '';

  return (
    <button
      className={`d-btn max-md:d-btn-block font-body-base-big rounded-full md:w-fit ${typeClass} ${roleClass} ${styleClasses} ${isDisabled ? 'd-btn-disabled' : ''} ${className}`}
      onClick={onClick}>
      {children}
    </button>
  );
}
