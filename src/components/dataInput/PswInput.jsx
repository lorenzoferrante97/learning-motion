import { EyeClosedIcon, EyeIcon } from '@phosphor-icons/react';
import { useState } from 'react';

export default function PswInput({
  name = 'mypswinput',
  labelClasses = '',
  placeholder = '',
  children,
}) {
  const [isPswVisible, setIsPswVisible] = useState(false);

  const handlePswView = () => setIsPswVisible(!isPswVisible);

  return (
    <>
      <label
        htmlFor={name}
        className={`${labelClasses} flex w-fit flex-col gap-2`}>
        {children}
        <div className='relative'>
          <div
            onClick={handlePswView}
            className='absolute top-0 right-2 z-10 translate-y-[50%]'>
            {isPswVisible ? (
              <EyeClosedIcon weight='fill' size={20} />
            ) : (
              <EyeIcon weight='fill' size={20} />
            )}
          </div>
          <input
            name={name}
            type={isPswVisible ? 'text' : 'password'}
            placeholder={placeholder}
            className='d-input bg-base-200/50 focus-visible:bg-base-100 border-base-300 min-w-52 rounded-md border'
          />
        </div>
      </label>
    </>
  );
}
