import { productsCollection } from "@/lib/dbCollections";

export async function GET(req) {
  const result = await productsCollection.find().toArray();
  return Response.json(result);
}
