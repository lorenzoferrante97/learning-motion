export default function Badge({ children, role, type, style, className = '' }) {
  const roleClass =
    role === 'primary'
      ? 'd-badge-primary'
      : role === 'secondary' || role === 'sec'
        ? 'd-badge-secondary'
        : role === 'accent'
          ? 'd-badge-accent'
          : role === 'error'
            ? 'd-badge-error'
            : role === 'warning'
              ? 'd-badge-warning'
              : role === 'success'
                ? 'd-badge-success'
                : role === 'info'
                  ? 'd-badge-info'
                  : 'd-badge-neutral';

  const typeClass =
    type === 'outline'
      ? 'd-badge-outline'
      : type === 'ghost'
        ? 'd-badge-ghost'
        : type === 'soft'
          ? 'd-badge-soft'
          : '';

  const styleClass = style === 'rounded' ? 'rounded-full' : 'rounded-sm';

  return (
    <>
      <span
        className={`d-badge ${typeClass} ${roleClass} ${styleClass} ${className}`}>
        {children}
      </span>
    </>
  );
}
