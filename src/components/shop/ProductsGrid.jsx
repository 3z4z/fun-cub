import ProductCardComponent from "./ProductCard";

export default async function ProductsGridComponent({ getProducts }) {
  const prods = await getProducts();
  return (
    <>
      <p className="mb-3">Total Products: {prods.length}</p>
      <div className="grid grid-cols-3 gap-5">
        {prods?.map((p, i) => (
          <ProductCardComponent key={i} product={p} />
        ))}
      </div>
    </>
  );
}
