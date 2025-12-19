export default function ProductCardComponent({ product }) {
  const { title } = product;
  return (
    <div className="p-5 rounded-lg shadow border border-neutral/3 bg-white">
      <p>{title}</p>
    </div>
  );
}
