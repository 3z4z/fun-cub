import PageTitleComponent from "@/components/layout/PageTitle";
import ShopHeaderComponent from "@/components/shop/Header";
import ProductsGridComponent from "@/components/shop/ProductsGrid";
import ShopSidebarComponent from "@/components/shop/Sidebar";
import { container } from "@/utils/classNames";

export const dynamic = "force-dynamic";

const getProducts = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, {
    // cache: "force-cache",
    next: {
      revalidate: 30,
    },
  });
  return await res.json();
};

export const metadata = {
  title: "All Products",
  description: "See our all products and get yours today!",
};

export default async function ShopPage() {
  const products = await getProducts();
  return (
    <>
      <PageTitleComponent
        title={"See all products"}
        subtitle={"Your favorite toys and educational items — explore & shop!"}
      />
      <main className={container}>
        <div className="grid grid-cols-4 gap-8">
          <ShopSidebarComponent />
          <div className="col-span-3">
            <ShopHeaderComponent />
            <div className="mt-4">
              <ProductsGridComponent products={products} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
