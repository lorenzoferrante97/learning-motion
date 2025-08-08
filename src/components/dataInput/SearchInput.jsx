import { MagnifyingGlassIcon } from '@phosphor-icons/react';

export default function SearchInput({
  name = 'mysearchinput',
  labelClasses = '',
  placeholder = '',
  children,
}) {
  return (
    <>
      <label
        htmlFor={name}
        className={`${labelClasses} flex w-fit flex-col gap-2`}>
        {children}
        <div className='relative'>
          <MagnifyingGlassIcon
            weight='fill'
            size={20}
            className='absolute top-0 right-2 z-10 translate-y-[50%]'
          />
          <input
            name={name}
            type='search'
            placeholder={placeholder}
            className='d-input bg-base-200/50 focus-visible:bg-base-100 border-base-300 min-w-52 rounded-md border'
          />
        </div>
      </label>
    </>
  );
}
