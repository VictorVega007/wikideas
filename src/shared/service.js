import axios from "axios";

const getClient = (url) => {
  return axios.create({
    baseURL: url,
  });
}

export const getTopics = async () => {
  try {
    const client = getClient("https://wikideas-adriana75.vercel.app/api/v1/topics/")
    const response = await client.get();
    const data = response.data;
    return data;
  } catch (error) {
    return error.message;
  }
};

export const getTopicById = async (id) => {
  try {
  const client = getClient(`https://wikideas-adriana75.vercel.app/api/v1/topics/${id}`)
    const response = client.get();
    const data = (await response).data;
    return data;
  } catch(error){
    return error.message;
  }
}

export const getTopicsByCategory = async (category) => {
  try {
      const client = getClient(`http://localhost:8000/api/v1/topics/?category=${category}`)
      const response = client.get();
      const data = (await response).data;
      return data;
    } catch(error){
      return error.message;
    }
}

export const getCategory = async (id) => {
  try {
      const client = getClient(`http://localhost:8000/api/v1/categories/${id}`)
      const response = client.get();
      const data = (await response).data;
      return data;
    } catch(error){
      return error.message;
    }
}

export const getCategories = async () => {
  try {
      const client = getClient(`http://localhost:8000/api/v1/categories`)
      const response = client.get();
      const data = (await response).data;
      return data;
    } catch(error){
      return error.message;
    }
}

