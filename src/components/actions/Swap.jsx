export default function Swap({
  children,
  className = '',
  onChange = () => {},
}) {
  return (
    <>
      <label className={`d-swap d-swap-rotate ${className}`}>
        <input type='checkbox' onChange={onChange} />
        {children}
      </label>
    </>
  );
}
