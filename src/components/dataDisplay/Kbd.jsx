export default function Kbd({ text, className = '' }) {
  return <kbd className={`d-kbd w-fit rounded-sm ${className}`}>{text}</kbd>;
}
