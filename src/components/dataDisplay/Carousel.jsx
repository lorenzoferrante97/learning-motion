export default function Carousel({ children, className = '' }) {
  return (
    <div
      className={`d-carousel d-carousel-center rounded-lg lg:rounded-xl ${className}`}>
      {children}
    </div>
  );
}
