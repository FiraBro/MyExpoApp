// listing.js
import Client from "./Client";

export default function getListing() {
  return Client.get("/products");
}
