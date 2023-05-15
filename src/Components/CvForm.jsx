export default function CvForm({ children }) {
  function handleClick(e) {
    e.preventDefault();
  }
  return (
    <form action="" onSubmit={handleClick} className="form">
      {children}
    </form>
  );
}
