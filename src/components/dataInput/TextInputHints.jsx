export default function TextInputHints({
  name = 'mytextinputhints',
  hintsId = 'hints',
  label = 'label text',
  labelClasses = '',
  placeholder = '',
  children,
}) {
  return (
    <>
      <label
        htmlFor={name}
        className={`${labelClasses} flex w-fit flex-col gap-2`}>
        {label}
        <input
          name={name}
          type='text'
          placeholder={placeholder}
          list={hintsId}
          className='d-input bg-base-200/50 focus-visible:bg-base-100 border-base-300 min-w-52 rounded-md border'
        />
        <datalist className='' id={hintsId}>
          {children}
        </datalist>
      </label>
    </>
  );
}
