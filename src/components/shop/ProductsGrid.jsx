import ProductCardComponent from "./ProductCard";

export default async function ProductsGridComponent({ products }) {
  return (
    <>
      <p className="mb-3">Total Products: {products.length}</p>
      <div className="grid grid-cols-3 gap-5">
        {products?.map((p, i) => (
          <ProductCardComponent key={i} product={p} />
        ))}
      </div>
    </>
  );
}
