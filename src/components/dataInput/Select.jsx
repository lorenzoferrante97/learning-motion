export default function Select({
  defaultValue = 'default value',
  children,
  label = 'label',
  labelClasses = '',
  name = 'myselect',
  className = '',
}) {
  return (
    <label
      htmlFor={name}
      className={`${labelClasses} flex w-fit flex-col gap-2`}>
      {label}
      <select
        defaultValue={defaultValue}
        name={name}
        className={`d-select d-select-neutral border-base-300 bg-base-200 rounded-md border ${className}`}>
        <option disabled={true}>{defaultValue}</option>
        {children}
      </select>
    </label>
  );
}
