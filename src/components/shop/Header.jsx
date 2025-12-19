export default function ShopHeaderComponent() {
  return (
    <header className="flex justify-between">
      <form role="Search" className="max-w-76 w-full">
        <input
          type="search"
          className="input"
          placeholder="Search in Fun Cub"
        />
      </form>
      <form className="max-w-56 w-full">
        <select name="sort" className="select">
          <option value="default">Sort by...</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="name-asc">Name: A to Z</option>
          <option value="name-desc">Name: Z to A</option>
        </select>
      </form>
    </header>
  );
}
