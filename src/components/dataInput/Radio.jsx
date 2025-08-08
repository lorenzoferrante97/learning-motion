export default function Radio({
  name,
  children,
  labelClasses = '',
  defaultChecked = false,
}) {
  return (
    <>
      <label
        htmlFor={name}
        className={`${labelClasses} flex w-fit items-center gap-2`}>
        <input
          type='radio'
          name={name}
          defaultChecked={defaultChecked}
          className='d-radio d-radio-neutral d-radio-sm'
        />
        {children}
      </label>
    </>
  );
}
