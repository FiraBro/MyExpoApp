import Client from "./Client";

// Get all products
export const getListing = async () => {
  try {
    const response = await Client.get("/products");
    // console.log("Logs:", response.data);
    return {
      ok: true,
      data: response.data,
    };
  } catch (error) {
    return {
      ok: false,
      problem: error.message,
      status: error.response?.status,
    };
  }
};

// Add a new product with FormData (for file upload)

export const addListing = async (products, onUploadingProgress) => {
  try {
    if (!products.title || !products.price || !products.category?.value) {
      throw new Error("Missing required fields");
    }

    // Simulate a progress bar
    for (let i = 0; i <= 1; i += 0.1) {
      await new Promise((r) => setTimeout(r, 100)); // Simulate time
      onUploadingProgress(i);
    }

    const response = await Client.post("/products", {
      title: products.title,
      price: products.price,
      description: products.description || "",
      categoryId: products.category.value,
      images: products.images,
      location: products.location,
    });

    return {
      ok: true,
      data: response.data,
    };
  } catch (error) {
    return {
      ok: false,
      problem: error.message,
      status: error.response?.status,
    };
  }
};

// Named exports are preferred for API services
export default {
  getListing,
  addListing,
};
