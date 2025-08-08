// start code

import { ArrowDownIcon } from '@phosphor-icons/react';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <>
      {/* --- HERO  ------------------------------------------------------ */}

      <div className='flex h-screen flex-col items-center justify-center py-12'>
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

      {/* --- SEZIONE 1 ------------------------------------------------------ */}
      <div className='row-grid gap-8 py-12'>
        <h2 className='font-h2 col-span-full'>Animazione base</h2>
        <div className='col-span-full flex flex-col gap-1'>
          <p className='text-base-content/75'>
            Importiamo il componente base per creare le animazioni
          </p>
          {/* code */}
          <div className='d-mockup-code bg-base-300 w-full'>
            <pre>
              <code>{"import { motion } from 'motion/react'"}</code>
            </pre>
          </div>
        </div>
        {/* - code example ------------ */}
        <div className='col-span-full grid grid-cols-2 gap-4'>
          <p className='text-base-content/75 col-span-full'>
            Creiamo la nostra prima animazione
          </p>
          <div className='d-mockup-code bg-base-300 col-span-full md:col-span-1'>
            <pre>
              <code>{`<motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  />`}</code>
            </pre>
          </div>

          {/* - esempio visivo ---------- */}
          <div className='bg-base-200 perfect-center col-span-full rounded-lg p-12 md:col-span-1'>
            <motion.div
              className='bg-primary size-20 rounded-md'
              initial={{ x: -80 }}
              animate={{ x: 80 }}
              transition={{ duration: 3 }}
            />
          </div>
          {/* - spiegazione ------------ */}
          <div></div>
        </div>
      </div>
    </>
  );
}
