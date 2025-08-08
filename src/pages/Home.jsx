// start code

import { ArrowDownIcon } from '@phosphor-icons/react';

export default function Home() {
  return (
    <>
      <div className='flex h-screen flex-col items-center justify-between py-12'>
        <div>
          <h1 className='font-h1'>
            Impara ad usare
            <span className='font-custom text-primary-content'> Motion </span>
            con React
          </h1>
          {/* --- Setup --------------- */}
          <div className='my-10 flex flex-col gap-2'>
            <span className='font-h4'>Prima di tutto...</span>
            <span className='text-base-content/75'>
              Installiamo Motion nel nostro progetto
            </span>
            {/* code */}
            <div className='d-mockup-code bg-base-300 w-full'>
              <pre data-prefix='$'>
                <code>npm i motion</code>
              </pre>
            </div>
          </div>
        </div>
        {/* button slide down */}
        <div className='flex flex-col items-center gap-2'>
          <span>Pronti a partire!</span>
          <div className='bg-accent text-accent-content size-fit rounded-full p-4'>
            <ArrowDownIcon weight='bold' size={32} />
          </div>
        </div>
      </div>
    </>
  );
}
