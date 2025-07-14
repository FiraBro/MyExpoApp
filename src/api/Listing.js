import Client from "./Client";

// Get all products
export const getListing = async () => {
  try {
    const response = await Client.get("/products");
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
export const addListing = async (products) => {
  try {
    const data = new FormData();

    // Validate required fields
    if (!products.title || !products.price || !products.category?.Id) {
      throw new Error("Missing required fields");
    }

    // Append fields
    data.append("title", products.title);
    data.append("price", products.price.toString());
    data.append("description", products.description || ""); // Handle optional field
    data.append("categoryId", products.category.Id);

    // Handle images
    if (products.images?.length) {
      products.images.forEach((image, index) => {
        data.append("images", {
          uri: image,
          name: `image_${index}_${Date.now()}.jpg`, // Unique filename
          type: "image/jpeg",
        });
      });
    }

    const response = await Client.post("/products", data, {
      headers: {
        "Content-Type": "multipart/form-data",
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
