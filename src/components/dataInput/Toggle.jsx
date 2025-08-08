export default function Toggle({
  className = '',
  labelClasses = '',
  name = 'mytoggle',
  children,
}) {
  return (
    <label className={`flex items-center gap-2 ${labelClasses}`} htmlFor={name}>
      <input
        type='checkbox'
        name={name}
        className={`d-toggle bg-base-200 text-neutral checked:text-neutral-content checked:bg-neutral border-neutral rounded-full before:rounded-full ${className}`}
      />
      {children}
    </label>
  );
}
