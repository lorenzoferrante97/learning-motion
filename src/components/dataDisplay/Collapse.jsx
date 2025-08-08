export default function Collapse({
  title = 'collapse title',
  children,
  name = 'accordion1',
  defaultChecked = false,
  className = '',
}) {
  return (
    <div className='d-collapse d-collapse-arrow d-join-item has-checked:bg-base-100 rounded-md lg:rounded-lg'>
      <input type='radio' name={name} defaultChecked={defaultChecked} />
      <div className={`d-collapse-title ${className}`}>{title}</div>
      <div className='d-collapse-content text-base-content/75'>{children}</div>
    </div>
  );
}
