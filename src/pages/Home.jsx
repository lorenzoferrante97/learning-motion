// start code

import { ArrowDownIcon, CaretRightIcon } from '@phosphor-icons/react';
import { easeIn, easeInOut, easeOut, motion } from 'motion/react';
import Accordion from '../components/dataDisplay/Accordion';
import Collapse from '../components/dataDisplay/Collapse';
import { useState } from 'react';
import Carousel from '../components/dataDisplay/Carousel';

export default function Home() {
  const [isPropagationVisible, setIsPropagationVisible] = useState(false);

  const parentVariants = {
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
    hidden: { opacity: 0 },
  };
  const childrenVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 40 },
  };

  return (
    <>
      {/* --- HERO  ------------------------------------------------------ */}

      <div className='flex h-screen flex-col items-center justify-center py-12'>
        <div className='flex flex-col items-center gap-4'>
          <h1 className='font-h1 text-center'>
            Impara ad usare
            <span className='font-custom text-primary-content'> Motion </span>
            con React
          </h1>
          {/* --- Setup --------------- */}
          <div className='my-10 flex flex-col gap-2 md:items-center'>
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
      <div className='row-grid gap-8 py-12 xl:mx-auto xl:w-[68%]'>
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
          <div className='perfect-center col-span-full rounded-lg p-12 md:col-span-1'>
            <motion.div
              className='bg-primary-content size-20 rounded-md'
              initial={{ x: -80 }}
              animate={{ x: 80 }}
              transition={{ duration: 3 }}
            />
          </div>
          {/* - spiegazione ------------ */}
          <div className='col-span-full'>
            <Accordion className=''>
              <Collapse
                title='Initial'
                className='font-body-base-big'
                name='base-animation-accordion'
                defaultChecked>
                Lo stato iniziale del componente, al suo montaggio
              </Collapse>
              <Collapse
                title='Animate'
                className='font-body-base-big'
                name='base-animation-accordion'>
                Lo stato finale del componente, quando l'animazione termina
              </Collapse>
              <Collapse
                title='Transition'
                className='font-body-base-big'
                name='base-animation-accordion'>
                Proprietà dell'animazione: tempo, easing...
              </Collapse>
            </Accordion>
          </div>
        </div>
      </div>

      {/* --- SEZIONE 2 ------------------------------------------------------ */}

      <div className='row-grid gap-8 py-12 xl:mx-auto xl:w-[68%]'>
        <h2 className='font-h2 col-span-full'>Interazioni animate</h2>

        {/* - code example ------------ */}
        <div className='col-span-full grid grid-cols-2 gap-4'>
          <p className='text-base-content/75 col-span-full'>
            Creiamo animazioni per l'hover, il click e il drag
          </p>
          <div className='d-mockup-code bg-base-300 col-span-full md:col-span-1'>
            <pre>
              <code>{`<motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    drag
    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
  />`}</code>
            </pre>
          </div>

          {/* - esempio visivo ---------- */}
          <div className='perfect-center col-span-full rounded-lg p-12 md:col-span-1'>
            <motion.div
              className='bg-primary text-primary-content flex gap-2 rounded-md p-4'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              drag
              dragConstraints={{
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
              }}>
              <span>Hover me!</span>
              <span>Click me!</span>
              <span>Drag me!</span>
            </motion.div>
          </div>
          {/* - spiegazione ------------ */}
          <div className='col-span-full'>
            <Accordion className=''>
              <Collapse
                title='whileHover'
                className='font-body-base-big'
                name='interactive-animation-accordion'
                defaultChecked>
                attiva le proprietà quando l'elemento è in stato di hover,
                ovvero quando il mouse passa sopra di esso
              </Collapse>
              <Collapse
                title='whileTap'
                className='font-body-base-big'
                name='interactive-animation-accordion'>
                attiva le proprietà quando l'elemento viene cliccato o tappato
              </Collapse>
              <Collapse
                title='drag / dragConstraints'
                className='font-body-base-big'
                name='interactive-animation-accordion'>
                abilita la possibilità di trascinare l'elemento. Con
                dragConstraints limita il movimento dell'elemento. Con tutte le
                coordinate spaziali a 0, l'elemento viene trascinato ma ritorna
                alla sua posizione iniziale quando si rilascia la presa.
              </Collapse>
            </Accordion>
          </div>
        </div>
      </div>

      {/* --- SEZIONE 3 ------------------------------------------------------ */}

      <div className='row-grid gap-8 py-12 xl:mx-auto xl:w-[68%]'>
        <h2 className='font-h2 col-span-full'>Variants</h2>

        {/* - code example ------------ */}
        <div className='col-span-full grid grid-cols-2 gap-4'>
          <p className='text-base-content/75 col-span-full'>
            Le variants permettono di riutilizzare animazioni predefinite, e di
            propagarle ai children di un elemento
          </p>
          <div className='d-mockup-code bg-base-300 col-span-full'>
            <pre>
              <code>{`const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }`}</code>
            </pre>
          </div>
          <p className='text-base-content/75 col-span-full'>
            Le passiamo ad un componente motion con il prop "variants", e usiamo
            i suoi states
          </p>
          <div className='d-mockup-code bg-base-300 col-span-full'>
            <pre>
              <code>{`<motion.div
    variants={variants}
    initial="hidden"
    animate="visible"
  />`}</code>
            </pre>
          </div>

          <h3 className='font-h3 col-span-full'>Propagation</h3>
          <p className='text-base-content/75 col-span-full'>
            Se impostiamo variants per parent e children con gli stessi states,
            e applichiamo animate solo al parent, le sue variants si
            propageranno in automatico anche ai children, senza dover
            reimpostare per ogni singolo children initial e animate
          </p>
          <div className='d-mockup-code bg-base-300 col-span-full md:col-span-1'>
            <pre>
              <code>{`const parentVariants = {
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
    hidden: { opacity: 0 },
  }
  const childrenVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -100 },
  }`}</code>
            </pre>
          </div>
          {/* - esempio visivo ---------- */}
          <div className='perfect-center col-span-full gap-2 rounded-lg p-12 max-md:flex-col md:col-span-1'>
            <motion.div
              className='bg-accent font-body-m-big text-accent-content flex cursor-pointer rounded-full px-4 py-2'
              onClick={() => setIsPropagationVisible(!isPropagationVisible)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}>
              <span>Show List</span>
            </motion.div>
            {isPropagationVisible && (
              <motion.ul
                className='flex flex-col gap-2'
                variants={parentVariants}
                initial='hidden'
                animate='visible'>
                <motion.li
                  variants={childrenVariants}
                  className='bg-secondary text-secondary-content font-body-s-normal rounded-sm px-2 py-1'>
                  List item 1
                </motion.li>
                <motion.li
                  variants={childrenVariants}
                  className='bg-secondary text-secondary-content font-body-s-normal rounded-sm px-2 py-1'>
                  List item 2
                </motion.li>
                <motion.li
                  variants={childrenVariants}
                  className='bg-secondary text-secondary-content font-body-s-normal rounded-sm px-2 py-1'>
                  List item 3
                </motion.li>
              </motion.ul>
            )}
          </div>
          {/* - spiegazione ------------ */}
          <div className='col-span-full'>
            <Accordion className=''>
              <Collapse
                title='prop variants'
                className='font-body-base-big'
                name='variants-accordion'
                defaultChecked>
                prop per passare l'oggetto di states di animazioni (hidden,
                visible...)
              </Collapse>
              <Collapse
                title='staggerChildren'
                className='font-body-base-big'
                name='variants-accordion'>
                proprietà di transition per attivare le animazioni dei children
                in sequenza, con un delay time
              </Collapse>
            </Accordion>
          </div>
        </div>
      </div>

      {/* --- SEZIONE 4 ------------------------------------------------------ */}
      <div className='row-grid gap-8 py-12 xl:mx-auto xl:w-[68%]'>
        {/* prettier-ignore */}
        <h2 className='font-h2 col-span-full'>
          Transition <span className='bg-primary text-primary-content rounded-full aspect-square size-fit perfect-center inline-flex p-1 relative top-[-4px]'><CaretRightIcon className='inline' weight='bold' size={12} /></span> Ease
        </h2>
        {/* prettier-ignore */}
        {/* - code example ------------ */}
        <div className='col-span-full grid grid-cols-2 gap-4'>
          <p className='text-base-content/75 col-span-full'>
            Ease regola l'andamento della velocità dell'animazione. I più
            comuni:
          </p>
          <div className='col-span-full'>
            <Carousel className='h-fit w-full space-x-2 p-2 md:w-[320px]'>
              <div className='d-carousel-item overflow-hidden'>
                <span className='bg-secondary font-body-s-normal text-secondary-content self-center rounded-full px-4 py-1'>
                  easeIn
                </span>
              </div>
              <div className='d-carousel-item overflow-hidden'>
                <span className='bg-secondary font-body-s-normal text-secondary-content self-center rounded-full px-4 py-1'>
                  easeOut
                </span>
              </div>
              <div className='d-carousel-item overflow-hidden'>
                <span className='bg-secondary font-body-s-normal text-secondary-content self-center rounded-full px-4 py-1'>
                  easeInOut
                </span>
              </div>
            </Carousel>
          </div>
          <div className='d-mockup-code bg-base-300 col-span-full md:col-span-1'>
            <pre>
              <code>{`<motion.div
    animate={{ x: 80 }}
    transition={{ duration: 5, ease: 'easeInOut'}}
  />`}</code>
            </pre>
          </div>

          {/* - esempio visivo ---------- */}
          <div className='perfect-center col-span-full flex-col gap-2 rounded-lg p-12 md:col-span-1'>
            <div className='grid w-full grid-cols-2'>
              <span className='text-primary-content w-fit self-center'>
                easeIn
              </span>
              <motion.div
                className='bg-primary-content size-5 rounded-full'
                animate={{ x: 80 }}
                transition={{ duration: 5, ease: easeIn }}
              />
            </div>
            <div className='grid w-full grid-cols-2'>
              <span className='text-secondary-content w-fit self-center'>
                easeOut
              </span>
              <motion.div
                className='bg-secondary-content size-5 rounded-full'
                animate={{ x: 80 }}
                transition={{ duration: 5, ease: easeOut }}
              />
            </div>
            <div className='grid w-full grid-cols-2'>
              <span className='text-accent-content w-fit self-center'>
                easeInOut
              </span>
              <motion.div
                className='bg-accent-content size-5 rounded-full'
                animate={{ x: 80 }}
                transition={{ duration: 5, ease: easeInOut }}
              />
            </div>
          </div>
          {/* - spiegazione ------------ */}
          <div className='col-span-full'>
            <Accordion className=''>
              <Collapse
                title='EaseIn'
                className='font-body-base-big'
                name='ease-accordion'
                defaultChecked>
                L'animazione inizia lenta e accellera al termine. Adatta per
                elementi in uscita.
              </Collapse>
              <Collapse
                title='EaseOut'
                className='font-body-base-big'
                name='ease-accordion'>
                L'animazione inizia accellerando e rallenta al termine. Adatta
                per elementi in entrata.
              </Collapse>
              <Collapse
                title='EaseInOut'
                className='font-body-base-big'
                name='ease-accordion'>
                L'animazione inizia lenta, accellera alla sua metà, e rallenta
                al suo termine. Adatta per animazioni continue (loop, cicli,
                cambi colore...)
              </Collapse>
            </Accordion>
          </div>
        </div>
      </div>

      {/* --- SEZIONE 5 ------------------------------------------------------ */}
      <div className='row-grid gap-8 py-12 xl:mx-auto xl:w-[68%]'>
        {/* prettier-ignore */}
        <h2 className='font-h2 col-span-full'>
          Transition <span className='bg-primary text-primary-content rounded-full aspect-square size-fit perfect-center inline-flex p-1 relative top-[-4px]'><CaretRightIcon className='inline' weight='bold' size={12} /></span> Type
        </h2>
        {/* prettier-ignore */}
        {/* - code example ------------ */}
        <div className='col-span-full grid grid-cols-2 gap-4'>
          <p className='text-base-content/75 col-span-full'>
            il Type definisce il tipo di animazione, più nello specifico il
            modello matematico che utilizzerà, e quindi come si comporterà.
          </p>
          <div className='col-span-full'>
            <Carousel className='h-fit w-full space-x-2 p-2 md:w-[320px]'>
              <div className='d-carousel-item overflow-hidden'>
                <span className='bg-secondary font-body-s-normal text-secondary-content self-center rounded-full px-4 py-1'>
                  tween (default)
                </span>
              </div>
              <div className='d-carousel-item overflow-hidden'>
                <span className='bg-secondary font-body-s-normal text-secondary-content self-center rounded-full px-4 py-1'>
                  spring
                </span>
              </div>
              <div className='d-carousel-item overflow-hidden'>
                <span className='bg-secondary font-body-s-normal text-secondary-content self-center rounded-full px-4 py-1'>
                  inertia
                </span>
              </div>
            </Carousel>
          </div>
          {/* - spring ----------- */}
          <div className='col-span-full grid grid-cols-2 gap-4'>
            <h3 className='font-h3 col-span-full'>Spring</h3>
            <p className='text-base-content/75 col-span-full'>
              Simula il movimento di una molla, quindi utilizzato soprattutto
              per animazioni con effetto rimbalzo naturale
            </p>
            <div className='d-mockup-code bg-base-300 col-span-full md:col-span-1'>
              <pre>
                <code>{`<motion.div
    animate={{ x: 80 }}
    transition={{
      duration: 5,
      type: 'spring',
      stiffness: 120,
      damping: 20,
      mass: 4,
      }}
  />`}</code>
              </pre>
            </div>
            {/* - esempio visivo ---------- */}
            <div className='col-span-full flex flex-col justify-center gap-2 rounded-lg p-12 md:col-span-1'>
              <motion.div
                className='bg-primary-content size-10 rounded-full'
                animate={{ x: 200 }}
                transition={{
                  type: 'spring',
                  stiffness: 120,
                  damping: 20,
                  mass: 4,
                }}
              />
            </div>
          </div>

          {/* - spiegazione ------------ */}
          <div className='col-span-full'>
            <Accordion className=''>
              <Collapse
                title='stiffness [ 100-500 (default = 100) ]'
                className='font-body-base-big'
                name='transition-type-accordion'
                defaultChecked>
                stiffness regola la rigidità della "molla". Più alto è il
                valore, più il movimento sarà rigido e veloce
              </Collapse>
              <Collapse
                title='damping [ 10-30 (default = 10) ]'
                className='font-body-base-big'
                name='transition-type-accordion'>
                damping regola lo smorzamento. Più alto è il valore, meno
                oscillazione e rimbalzi avrà l'animazione, più fluida risulterà
              </Collapse>
              <Collapse
                title='mass (default = 1)'
                className='font-body-base-big'
                name='transition-type-accordion'>
                mass regola la massa e quindi l'inerzia. Più alto è il valore,
                più pesante e lento sarà il movimento
              </Collapse>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}
