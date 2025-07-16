import Client from "./Client";

// Get all products
export const getListing = async () => {
  try {
    const response = await Client.get("/products");
    // console.log(response.data);
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
    // Validate required fields
    if (!products.title || !products.price || !products.category?.value) {
      throw new Error("Missing required fields");
    }

    const data = {
      title: products.title,
      price: products.price,
      description: products.description || "",
      categoryId: products.category.value,
      images: products.images.map((uri, index) => ({
        url: uri,
        thumbnailUrl: uri,
      })),
      location: products.location, // Add location if you want
    };

    const response = await Client.post("/products", data, {
      onUploadProgress: (progress) => {
        console.log(progress.loaded / progress.total);
      },
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
