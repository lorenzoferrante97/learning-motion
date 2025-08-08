export default function Checkbox({
  name,
  className = '',
  children,
  labelClasses = '',
}) {
  return (
    <label
      htmlFor={name}
      className={`${labelClasses} flex w-fit items-center gap-2`}>
      <input
        type='checkbox'
        name={name}
        className={`d-checkbox d-checkbox-sm border-base-300 bg-base-200 checked:border-primary-content checked:bg-primary checked:text-primary-content border ${className}`}
      />
      {children}
    </label>
  );
}
