export default function NumInput({
  name = 'mynuminput',
  labelClasses = '',
  placeholder = '',
  min = 0,
  max = 10,
  children,
}) {
  return (
    <>
      <label
        htmlFor={name}
        className={`${labelClasses} flex w-fit flex-col gap-2`}>
        {children}
        <input
          name={name}
          type='number'
          min={min}
          max={max}
          placeholder={placeholder}
          className='d-input bg-base-200/50 focus-visible:bg-base-100 border-base-300 min-w-52 rounded-md border'
        />
      </label>
    </>
  );
}
