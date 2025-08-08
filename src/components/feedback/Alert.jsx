export default function Alert({ children, className = '', role }) {
  const roleClass =
    role === 'error'
      ? 'd-alert-error'
      : role === 'warning'
        ? 'd-alert-warning'
        : role === 'success'
          ? 'd-alert-success'
          : role === 'info'
            ? 'd-alert-info'
            : 'd-alert-error';

  return (
    <div role='alert' className={`d-alert ${roleClass} ${className}`}>
      {children}
    </div>
  );
}
