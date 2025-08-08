export default function DateInput({
  name = 'mydateinput',
  labelClasses = '',
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
          type='date'
          className='d-input bg-base-200/50 focus-visible:bg-base-100 border-base-300 min-w-52 rounded-md border'
        />
      </label>
    </>
  );
}
