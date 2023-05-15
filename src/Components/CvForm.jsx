export default function CvForm({ children, onSubmit }) {
  return (
    <form action="" className="form" onSubmit={onSubmit}>
      {children}
    </form>
  );
}
