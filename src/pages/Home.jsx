// start code

import { ArrowDownIcon, CaretRightIcon } from "@phosphor-icons/react"
import { AnimatePresence, easeIn, easeInOut, easeOut, motion, useScroll } from "motion/react"
import { useState } from "react"
import Accordion from "../components/dataDisplay/Accordion"
import Carousel from "../components/dataDisplay/Carousel"
import Collapse from "../components/dataDisplay/Collapse"

export default function Home() {
  const [isPropagationVisible, setIsPropagationVisible] = useState(false)
  const [isAPVisible, setIsAPVisible] = useState(false)
  const [isLayoutOpen, setIsLayoutOpen] = useState(false)
  const [isLayoutIdVisible, setIsLayoutIdVisible] = useState(false)
  const { scrollYProgress } = useScroll()

  const parentVariants = {
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
    hidden: { opacity: 0 },
  }
  const childrenVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 40 },
  }

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
            <span className='text-base-content/75'>Installiamo Motion nel nostro progetto</span>
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
            <ArrowDownIcon size={32} weight='bold' />
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
          <p className='text-base-content/75 col-span-full'>Creiamo la nostra prima animazione</p>
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
              animate={{ x: 80 }}
              className='bg-accent size-20 rounded-md'
              initial={{ x: -80 }}
              transition={{ duration: 3 }}
            />
          </div>
          {/* - spiegazione ------------ */}
          <div className='col-span-full'>
            <Accordion className=''>
              <Collapse
                className='font-body-base-big'
                defaultChecked
                name='base-animation-accordion'
                title='Initial'>
                Lo stato iniziale del componente, al suo montaggio
              </Collapse>
              <Collapse
                className='font-body-base-big'
                name='base-animation-accordion'
                title='Animate'>
                Lo stato finale del componente, quando l'animazione termina
              </Collapse>
              <Collapse
                className='font-body-base-big'
                name='base-animation-accordion'
                title='Transition'>
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
              className='bg-accent font-body-s-big text-accent-content flex gap-2 rounded-md p-4'
              drag
              dragConstraints={{
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}>
              <span>Hover me!</span>
              <span>Click me!</span>
              <span>Drag me!</span>
            </motion.div>
          </div>
          {/* - spiegazione ------------ */}
          <div className='col-span-full'>
            <Accordion className=''>
              <Collapse
                className='font-body-base-big'
                defaultChecked
                name='interactive-animation-accordion'
                title='whileHover'>
                attiva le proprietà quando l'elemento è in stato di hover, ovvero quando il mouse
                passa sopra di esso
              </Collapse>
              <Collapse
                className='font-body-base-big'
                name='interactive-animation-accordion'
                title='whileTap'>
                attiva le proprietà quando l'elemento viene cliccato o tappato
              </Collapse>
              <Collapse
                className='font-body-base-big'
                name='interactive-animation-accordion'
                title='drag / dragConstraints'>
                abilita la possibilità di trascinare l'elemento. Con dragConstraints limita il
                movimento dell'elemento. Con tutte le coordinate spaziali a 0, l'elemento viene
                trascinato ma ritorna alla sua posizione iniziale quando si rilascia la presa.
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
            Le variants permettono di riutilizzare animazioni predefinite, e di propagarle ai
            children di un elemento
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
            Le passiamo ad un componente motion con il prop "variants", e usiamo i suoi states
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
            Se impostiamo variants per parent e children con gli stessi states, e applichiamo
            animate solo al parent, le sue variants si propageranno in automatico anche ai children,
            senza dover reimpostare per ogni singolo children initial e animate
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
                animate='visible'
                className='flex flex-col gap-2'
                initial='hidden'
                variants={parentVariants}>
                <motion.li
                  className='bg-secondary text-secondary-content font-body-s-normal rounded-sm px-2 py-1'
                  variants={childrenVariants}>
                  List item 1
                </motion.li>
                <motion.li
                  className='bg-secondary text-secondary-content font-body-s-normal rounded-sm px-2 py-1'
                  variants={childrenVariants}>
                  List item 2
                </motion.li>
                <motion.li
                  className='bg-secondary text-secondary-content font-body-s-normal rounded-sm px-2 py-1'
                  variants={childrenVariants}>
                  List item 3
                </motion.li>
              </motion.ul>
            )}
          </div>
          {/* - spiegazione ------------ */}
          <div className='col-span-full'>
            <Accordion className=''>
              <Collapse
                className='font-body-base-big'
                defaultChecked
                name='variants-accordion'
                title='prop variants'>
                prop per passare l'oggetto di states di animazioni (hidden, visible...)
              </Collapse>
              <Collapse
                className='font-body-base-big'
                name='variants-accordion'
                title='staggerChildren'>
                proprietà di transition per attivare le animazioni dei children in sequenza, con un
                delay time
              </Collapse>
            </Accordion>
          </div>
        </div>
      </div>

      {/* --- SEZIONE 4 ------------------------------------------------------ */}
      <div className='row-grid gap-8 py-12 xl:mx-auto xl:w-[68%]'>
        {/* prettier-ignore */}
        <h2 className='font-h2 col-span-full'>
          Transition{" "}
          <span className='bg-primary text-primary-content rounded-full aspect-square size-fit perfect-center inline-flex p-1 relative top-[-4px]'>
            <CaretRightIcon className='inline' size={12} weight='bold' />
          </span>{" "}
          Ease
        </h2>
        {/* prettier-ignore */}
        {/* - code example ------------ */}
        <div className='col-span-full grid grid-cols-2 gap-4'>
          <p className='text-base-content/75 col-span-full'>
            Ease regola l'andamento della velocità dell'animazione. I più comuni:
          </p>
          <div className='col-span-full'>
            <Carousel className='h-fit w-full space-x-2 p-2 md:w-[320px]'>
              <div className='d-carousel-item overflow-hidden'>
                <span className='bg-accent font-body-s-normal text-accent-content self-center rounded-full px-4 py-1'>
                  easeIn
                </span>
              </div>
              <div className='d-carousel-item overflow-hidden'>
                <span className='bg-accent font-body-s-normal text-accent-content self-center rounded-full px-4 py-1'>
                  {" "}
                  easeOut
                </span>
              </div>
              <div className='d-carousel-item overflow-hidden'>
                <span className='bg-accent font-body-s-normal text-accent-content self-center rounded-full px-4 py-1'>
                  {" "}
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
              <span className='text-primary-content w-fit self-center'>easeIn</span>
              <motion.div
                animate={{ x: 80 }}
                className='bg-primary-content size-5 rounded-full'
                transition={{ duration: 5, ease: easeIn }}
              />
            </div>
            <div className='grid w-full grid-cols-2'>
              <span className='text-secondary-content w-fit self-center'>easeOut</span>
              <motion.div
                animate={{ x: 80 }}
                className='bg-secondary-content size-5 rounded-full'
                transition={{ duration: 5, ease: easeOut }}
              />
            </div>
            <div className='grid w-full grid-cols-2'>
              <span className='text-accent-content w-fit self-center'>easeInOut</span>
              <motion.div
                animate={{ x: 80 }}
                className='bg-accent-content size-5 rounded-full'
                transition={{ duration: 5, ease: easeInOut }}
              />
            </div>
          </div>
          {/* - spiegazione ------------ */}
          <div className='col-span-full'>
            <Accordion className=''>
              <Collapse
                className='font-body-base-big'
                defaultChecked
                name='ease-accordion'
                title='EaseIn'>
                L'animazione inizia lenta e accellera al termine. Adatta per elementi in uscita.
              </Collapse>
              <Collapse className='font-body-base-big' name='ease-accordion' title='EaseOut'>
                L'animazione inizia accellerando e rallenta al termine. Adatta per elementi in
                entrata.
              </Collapse>
              <Collapse className='font-body-base-big' name='ease-accordion' title='EaseInOut'>
                L'animazione inizia lenta, accellera alla sua metà, e rallenta al suo termine.
                Adatta per animazioni continue (loop, cicli, cambi colore...)
              </Collapse>
            </Accordion>
          </div>
        </div>
      </div>

      {/* --- SEZIONE 5 ------------------------------------------------------ */}
      <div className='row-grid gap-8 py-12 xl:mx-auto xl:w-[68%]'>
        {/* prettier-ignore */}
        <h2 className='font-h2 col-span-full'>
          Transition{" "}
          <span className='bg-primary text-primary-content rounded-full aspect-square size-fit perfect-center inline-flex p-1 relative top-[-4px]'>
            <CaretRightIcon className='inline' size={12} weight='bold' />
          </span>{" "}
          Type
        </h2>
        {/* prettier-ignore */}
        {/* - code example ------------ */}
        <div className='col-span-full grid grid-cols-2 gap-4'>
          <p className='text-base-content/75 col-span-full'>
            il Type definisce il tipo di animazione, più nello specifico il modello matematico che
            utilizzerà, e quindi come si comporterà.
          </p>
          <div className='col-span-full'>
            <Carousel className='h-fit w-full space-x-2 p-2 md:w-[320px]'>
              <div className='d-carousel-item overflow-hidden'>
                <span className='bg-accent font-body-s-normal text-accent-content self-center rounded-full px-4 py-1'>
                  tween (default)
                </span>
              </div>
              <div className='d-carousel-item overflow-hidden'>
                <span className='bg-accent font-body-s-normal text-accent-content self-center rounded-full px-4 py-1'>
                  {" "}
                  spring
                </span>
              </div>
              <div className='d-carousel-item overflow-hidden'>
                <span className='bg-accent font-body-s-normal text-accent-content self-center rounded-full px-4 py-1'>
                  {" "}
                  inertia
                </span>
              </div>
            </Carousel>
          </div>
          {/* - spring ----------- */}
          <div className='col-span-full grid grid-cols-2 gap-4'>
            <h3 className='font-h3 col-span-full'>Spring</h3>
            <p className='text-base-content/75 col-span-full'>
              Simula il movimento di una molla, quindi utilizzato soprattutto per animazioni con
              effetto rimbalzo naturale
            </p>
            <div className='d-mockup-code bg-base-300 col-span-full md:col-span-1'>
              <pre>
                <code>{`<motion.div
    animate={{ x: 80 }}
    transition={{
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
                animate={{ x: 200 }}
                className='bg-accent size-10 rounded-full'
                transition={{
                  type: "spring",
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
                className='font-body-base-big'
                defaultChecked
                name='transition-type-accordion'
                title='stiffness [ 100-500 (default = 100) ]'>
                stiffness regola la rigidità della "molla". Più alto è il valore, più il movimento
                sarà rigido e veloce
              </Collapse>
              <Collapse
                className='font-body-base-big'
                name='transition-type-accordion'
                title='damping [ 10-30 (default = 10) ]'>
                damping regola lo smorzamento. Più alto è il valore, meno oscillazione e rimbalzi
                avrà l'animazione, più fluida risulterà
              </Collapse>
              <Collapse
                className='font-body-base-big'
                name='transition-type-accordion'
                title='mass (default = 1)'>
                mass regola la massa e quindi l'inerzia. Più alto è il valore, più pesante e lento
                sarà il movimento
              </Collapse>
            </Accordion>
          </div>
          {/* - inertia ----------- */}
          <div className='col-span-full grid grid-cols-2 gap-4'>
            <h3 className='font-h3 col-span-full'>Inertia</h3>
            <p className='text-base-content/75 col-span-full'>
              Simula l'inerzia di un oggetto con massa. Viene utilizzato di default dall'animazione
              Drag, per simulare questo effetto.
            </p>
          </div>
        </div>
      </div>
      {/* --- SEZIONE 6 ------------------------------------------------------ */}
      <div className='row-grid gap-8 py-12 xl:mx-auto xl:w-[68%]'>
        {/* prettier-ignore */}
        <h2 className='font-h2 col-span-full'>
          Transition{" "}
          <span className='bg-primary text-primary-content rounded-full aspect-square size-fit perfect-center inline-flex p-1 relative top-[-4px]'>
            <CaretRightIcon className='inline' size={12} weight='bold' />
          </span>{" "}
          repeat
        </h2>
        {/* prettier-ignore */}
        {/* - code example ------------ */}
        <div className='col-span-full grid grid-cols-2 gap-4'>
          <p className='text-base-content/75 col-span-full'>
            repeat permette di definire quante volte si ripeterà l'animazione. Inoltre permette di
            definire il tipo di ripetizione e il delay.
          </p>

          {/* - spring ----------- */}
          <div className='col-span-full grid grid-cols-2 gap-4'>
            <div className='d-mockup-code bg-base-300 col-span-full md:col-span-1'>
              <pre>
                <code>{`<motion.div
    animate={{ x: 80 }}
    transition={{
      duration: 3,
      repeat: Infinity,
      repeatType: "loop"
      }}
  />`}</code>
              </pre>
            </div>
            {/* - esempio visivo ---------- */}
            <div className='perfect-center col-span-full flex-col gap-2 rounded-lg p-12 md:col-span-1'>
              <div className='grid w-full grid-cols-2'>
                <span className='text-primary-content w-fit self-center'>repeatType: "loop"</span>
                <motion.div
                  animate={{ x: 80 }}
                  className='bg-primary-content size-5 rounded-full'
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                />
              </div>
              <div className='grid w-full grid-cols-2'>
                <span className='text-secondary-content w-fit self-center'>
                  repeatType: "reverse"
                </span>
                <motion.div
                  animate={{ x: 80 }}
                  className='bg-secondary-content size-5 rounded-full'
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              </div>
              <div className='grid w-full grid-cols-2'>
                <span className='text-accent-content w-fit self-center'>repeatType: "mirror"</span>
                <motion.div
                  animate={{ x: 80 }}
                  className='bg-accent-content size-5 rounded-full'
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "mirror",
                  }}
                />
              </div>
            </div>
          </div>

          {/* - spiegazione ------------ */}
          <div className='col-span-full'>
            <Accordion className=''>
              <Collapse
                className='font-body-base-big'
                defaultChecked
                name='repeat-accordion'
                title='loop'>
                loop fa ripartire l'animazione dall'inizio
              </Collapse>
              <Collapse className='font-body-base-big' name='repeat-accordion' title='reverse'>
                reverse alterna la direzione dell'animazione, facendo "tornare indietro" allo stato
                iniziale l'elemento, con uno stacco fluido.
              </Collapse>
              <Collapse className='font-body-base-big' name='repeat-accordion' title='mirror'>
                mirror è come reverse, ma mantiene il tempo costante in entrambe le direzioni,
                quindi con uno stacco più netto
              </Collapse>
            </Accordion>
          </div>
        </div>
      </div>

      {/* --- SEZIONE 7 ------------------------------------------------------ */}

      <div className='row-grid gap-8 py-12 xl:mx-auto xl:w-[68%]'>
        <h2 className='font-h2 col-span-full'>Scroll animations</h2>

        {/* - code example ------------ */}
        <div className='col-span-full grid grid-cols-2 gap-4'>
          <p className='text-base-content/75 col-span-full'>
            Le scroll animations permettono di animare elementi quando entrano nel viewport durante
            lo scroll. "whileInView" sostituisce animate.
          </p>
          <div className='d-mockup-code bg-base-300 col-span-full md:col-span-1'>
            <pre>
              <code>{`<motion.div
    initial={{ x: 80 }}
    whileInView={{ x: 0 }}
    transition={{ duration: 3, ease: 'easeOut' }}
    viewport={{ once: true, amount: 0.3 }}
  />`}</code>
            </pre>
          </div>

          {/* - esempio visivo ---------- */}
          <div className='perfect-center col-span-full rounded-lg p-12 md:col-span-1'>
            <motion.div
              className='bg-accent font-body-s-big size-20 rounded-full'
              initial={{ x: 80 }}
              transition={{ duration: 3, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              whileInView={{ x: 0 }}
            />
          </div>
          {/* - spiegazione ------------ */}
          <div className='col-span-full'>
            <Accordion className=''>
              <Collapse
                className='font-body-base-big'
                defaultChecked
                name='scroll-accordion'
                title='viewport'>
                prop che permette di controllare l'animazione di entrata nel viewport tramite due
                parametri: "once" e "amount"
              </Collapse>
              <Collapse
                className='font-body-base-big'
                name='scroll-accordion'
                title='--- once (true | false)'>
                once permette di definire se l'animazione avviene solo la prima volta oppure ogni
                volta che l'elemento entra nel viewport. True = avviene solo la prima volta
              </Collapse>
              <Collapse
                className='font-body-base-big'
                name='scroll-accordion'
                title='--- amount (da 0 a 1)'>
                amount permette di definire la percentuale di visibilità dell'elemento che deve
                essere entrata nel viewport prima di poter attivare l'animazione
              </Collapse>
            </Accordion>
          </div>
        </div>
      </div>

      {/* --- SEZIONE 8 ------------------------------------------------------ */}

      <div className='row-grid gap-8 py-12 xl:mx-auto xl:w-[68%]'>
        <h2 className='font-h2 col-span-full'>AnimatePresence</h2>

        {/* - code example ------------ */}
        <div className='col-span-full grid grid-cols-2 gap-4'>
          <p className='text-base-content/75 col-span-full'>
            Di norma, quando un componente viene smontato, sparisce immediatamente. AnimatePresence
            permette di animare l'uscita dal DOM di un componente.
          </p>

          <div className='col-span-full'>
            <p className='text-base-content/75 col-span-full'>Utile per:</p>
            <Carousel className='h-fit w-full space-x-2 p-2'>
              <div className='d-carousel-item overflow-hidden'>
                <span className='bg-accent font-body-s-normal text-accent-content self-center rounded-full px-4 py-1'>
                  Popup e Modali
                </span>
              </div>
              <div className='d-carousel-item overflow-hidden'>
                <span className='bg-accent font-body-s-normal text-accent-content self-center rounded-full px-4 py-1'>
                  Liste di elementi
                </span>
              </div>
              <div className='d-carousel-item overflow-hidden'>
                <span className='bg-accent font-body-s-normal text-accent-content self-center rounded-full px-4 py-1'>
                  Navigazione tra pagine
                </span>
              </div>
            </Carousel>
          </div>

          <div className='d-mockup-code bg-base-300 col-span-full md:col-span-1'>
            <pre>
              <code>{`
    const [isVisible, setIsVisible] = useState(true);

    <button onClick={() => setIsVisible(!isVisible)}>
      Toggle Box
    </button>

    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="box"
          initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{ duration: 3 }}
        />
      )}
    </AnimatePresence>
              `}</code>
            </pre>
          </div>

          {/* - esempio visivo ---------- */}
          <div className='perfect-center col-span-full flex-col gap-4 rounded-lg p-12 md:col-span-1'>
            <button
              className='bg-accent font-body-base-big text-accent-content perfect-center rounded-full px-4 py-2'
              onClick={() => setIsAPVisible(!isAPVisible)}
              type='button'>
              Toggle Box
            </button>
            <AnimatePresence>
              {isAPVisible && (
                <motion.div
                  className='bg-secondary size-20 rounded-md'
                  exit={{ opacity: 0, x: 80 }}
                  initial={{ opacity: 0, x: -80 }}
                  key='box'
                  transition={{ duration: 3 }}
                  whileInView={{ opacity: 1, x: 0 }}
                />
              )}
            </AnimatePresence>
          </div>
          {/* - spiegazione ------------ */}
          <div className='col-span-full'>
            <Accordion className=''>
              <Collapse
                className='font-body-base-big'
                defaultChecked
                name='animatepresence-accordion'
                title='isVisible'>
                AnimatePresence necessita di elementi condizionali che montano/smontano i
                componenti, come uno state isVisible
              </Collapse>
              <Collapse
                className='font-body-base-big'
                name='animatepresence-accordion'
                title='exit'>
                il prop exit definisce l'animazione di smontaggio del componente
              </Collapse>
              <Collapse className='font-body-base-big' name='animatepresence-accordion' title='key'>
                key definisce l'istanza del componente. se la key non cambia, Motion identifica quel
                componente come sempre lo stesso, quindi non fa ripartire l'animazione di
                montaggio/smontaggio
              </Collapse>
            </Accordion>
          </div>
        </div>
      </div>

      {/* --- SEZIONE 9 ------------------------------------------------------ */}

      <div className='row-grid gap-8 py-12 xl:mx-auto xl:w-[68%]'>
        <h2 className='font-h2 col-span-full'>Layout animations</h2>

        {/* - code example ------------ */}
        <div className='col-span-full grid grid-cols-2 gap-4'>
          <p className='text-base-content/75 col-span-full'>
            Il prop layout consente di animare automaticamente un elemento in base al cambiamento
            dei suoi valori di posizione/dimensione, senza dover calcolarne i valori manualmente.
          </p>

          <div className='d-mockup-code bg-base-300 col-span-full md:col-span-1'>
            <pre>
              <code>{`
    const [isLayoutOpen, setIsLayoutOpen] = useState(false);

      <motion.div
        layout
        onClick={() => setIsLayoutOpen(!isLayoutOpen)}
        className='isLayoutOpen ? "h-52" : "h-20"'
      />
              `}</code>
            </pre>
          </div>

          {/* - esempio visivo ---------- */}
          <div className='perfect-center col-span-full flex-col gap-4 rounded-lg p-12 md:col-span-1'>
            <motion.div
              className={`bg-accent cursor-pointer h-20 ${isLayoutOpen ? "w-52 rounded-lg" : "w-20 rounded-md"}`}
              layout
              onClick={() => setIsLayoutOpen(!isLayoutOpen)}
            />
          </div>
          {/* - layout id ----------- */}
          <div className='col-span-full grid grid-cols-2 gap-4'>
            <h3 className='font-h3 col-span-full'>LayoutId</h3>
            <p className='text-base-content/75 col-span-full'>
              LayoutId permette di creare una transizione tra due componenti diversi.
            </p>
          </div>
          <div className='d-mockup-code bg-base-300 col-span-full md:col-span-1'>
            <pre>
              <code>{`
    {isLayoutIdVisible ? (
      <motion.div
        className='perfect-center p-10 bg-accent text-accent-content rounded-lg'
        key='box-open'
        layoutId='boxes'>
        Box 2
      </motion.div>
    ) : (
      <motion.div
        className='p-4 bg-primary text-primary-content rounded-md perfect-center'
        key='box-closed'
        layoutId='boxes'>
        Box 1
      </motion.div>
    )}
              `}</code>
            </pre>
          </div>

          {/* - esempio visivo ---------- */}
          <div className='perfect-center col-span-full gap-4 justify-between rounded-lg p-12 md:col-span-1'>
            <button
              className='bg-accent text-accent-content rounded-full px-4 py-1'
              onClick={() => setIsLayoutIdVisible(!isLayoutIdVisible)}
              type='button'>
              Toggle layoutId
            </button>
            <AnimatePresence>
              {isLayoutIdVisible ? (
                <motion.div
                  className='perfect-center p-10 bg-accent text-accent-content rounded-lg'
                  key='box-open'
                  layoutId='boxes'>
                  Box 2
                </motion.div>
              ) : (
                <motion.div
                  className='p-4 bg-primary text-primary-content rounded-md perfect-center'
                  key='box-closed'
                  layoutId='boxes'>
                  Box 1
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {/* - spiegazione ------------ */}
          <div className='col-span-full'>
            <Accordion className=''>
              <Collapse
                className='font-body-base-big'
                defaultChecked
                name='layout-accordion'
                title='layout'>
                basta inserire questo prop e inserire nel componente una trasformazione condizionale
                (condition ? 'x' : 'y').<br></br>Esempi di utilizzo: apertura/chiusura di un
                accordion, card che si espande/riduce, elementi resposnsive che si adattano alla
                schermata...
              </Collapse>
              <Collapse className='font-body-base-big' name='layout-accordion' title='layoutId'>
                inserire lo stesso prop layoutId sui due elementi tra cui si vuole creare una
                transizione.<br></br>Esempi di utilizzo: passaggio da card a modale, passaggio da
                thumbnail a image fullscreen, passaggio tra router pages, cambio di tab nei tabs...
              </Collapse>
            </Accordion>
          </div>
        </div>
      </div>

      {/* --- SEZIONE 10 ------------------------------------------------------ */}

      <div className='row-grid gap-8 py-12 xl:mx-auto xl:w-[68%]'>
        <h2 className='font-h2 col-span-full'>useScroll</h2>

        {/* - code example ------------ */}
        <div className='col-span-full grid grid-cols-2 gap-4'>
          <p className='text-base-content/75 col-span-full'>
            useScroll fornisce un motion value che definisce la posizione dello scroll nella pagina.
            Può essere utilizzato per indicatori di scroll, effetti parallax...
          </p>

          <div className='d-mockup-code bg-base-300 col-span-full md:col-span-1'>
            <pre>
              <code>{`
    const { scrollYProgress } = useScroll()

    <motion.div
      className='h-5 bg-accent fixed top-0 left-0 right-0 z-50'
      style={{ scaleX: scrollYProgress, originX: 0 }}
    />
              `}</code>
            </pre>
          </div>

          {/* - esempio visivo ---------- */}
          <div className='perfect-center col-span-full flex-col gap-4 rounded-lg p-12 md:col-span-1'>
            <p>Guarda lo scroll indicator giallo in alto che scorre con lo scroll 😉</p>
            <motion.div
              className='h-5 bg-accent fixed top-0 left-0 right-0 z-50'
              style={{ scaleX: scrollYProgress, originX: 0 }}
            />
          </div>

          {/* - spiegazione ------------ */}
          <div className='col-span-full'>
            <Accordion className=''>
              <Collapse
                className='font-body-base-big'
                defaultChecked
                name='usescroll-accordion'
                title='scrollYProgress / scrollXProgress'>
                ritorna un valore percentuale dello scorrimento della pagina, da 0 (inizio pagina) a
                1 (fine pagina). Es: a metà pagina il valore sarà 0.5.
              </Collapse>
              <Collapse
                className='font-body-base-big'
                name='usescroll-accordion'
                title='scrollY / scrollX'>
                ritorna il valore assoluto dello scorrimento della pagina, in pixel. Es: su una
                pagina con height di 1000px, a metà pagina il valore sarà 500px.
              </Collapse>
            </Accordion>
          </div>
          {/* - parametri ----------- */}
          <div className='col-span-full grid grid-cols-2 gap-4'>
            <h3 className='font-h3 col-span-full'>Parametri</h3>
            <div className='d-mockup-code bg-base-300 col-span-full md:col-span-1'>
              <pre>
                <code>{`const { scrollYProgress } = useScroll({ container: containerRef });`}</code>
              </pre>
            </div>
            <div className='d-mockup-code bg-base-300 col-span-full md:col-span-1'>
              <pre>
                <code>{`const { scrollYProgress } = useScroll({ target: targetRef });`}</code>
              </pre>
            </div>
            <div className='d-mockup-code bg-base-300 col-span-full'>
              <pre>
                <code>{`const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"] // start / center / end / 0-1 (%)
});`}</code>
              </pre>
            </div>
          </div>
          {/* - spiegazione ------------ */}
          <div className='col-span-full'>
            <Accordion className=''>
              <Collapse
                className='font-body-base-big'
                defaultChecked
                name='usescroll-options-accordion'
                title='container'>
                permette di controllare lo scroll di un elemento specifico. Es: scroll di un
                carousel, scroll di un div con overflow: auto...
              </Collapse>
              <Collapse
                className='font-body-base-big'
                name='usescroll-options-accordion'
                title='target'>
                permette di controllare la posizione di un elemento specifico nel container o
                viewport dello scroll.
              </Collapse>
              <Collapse
                className='font-body-base-big'
                name='usescroll-options-accordion'
                title='offset'>
                permette di controllare quando l'animazione inizia/termina in base alla parte
                visibile del target e del container. Es: "start end", "end start" = l'animazione
                inizia quando l'inizio del target incontra il bordo inferiore del viewport, quindi
                appena inizia a essere visibile, e termina quando la fine del target incontra il
                bordo superiore del viewport, quindi quando non è più visibile.
              </Collapse>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  )
}
