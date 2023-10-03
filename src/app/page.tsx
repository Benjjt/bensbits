import Main from "@/components/Main";
import getAllProducts from "@/lib/getAllProducts";

export default async function Home() {
  const initialData: APIReturn = await getAllProducts();
  const products: Product[] = initialData.products;
  console.log("initial fetch", products);
  return (
    <div className=" flex-col justify-start items-center w-screen h-screen">
      <Main products={products} />
    </div>
  );
}
