import Button from './Button';

export default function Modal({
  children,
  modalId = 'modal1',
  className = '',
}) {
  return (
    <>
      <dialog id={modalId} className={`d-modal ${className}`}>
        <div className='d-modal-box'>{children}</div>
        {/* close clicking outside the modal */}
        <form method='dialog' className='d-modal-backdrop'>
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
