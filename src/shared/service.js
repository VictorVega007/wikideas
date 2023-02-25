import axios from "axios";

const client = axios.create({
  baseURL: "https://wikideas-adriana75.vercel.app/api/v1/topics",
});

export const getTopics = async () => {
  try {
    const response = await client.get();
    const data = response.data;
    return data;
  } catch (error) {
    return error.message;
  }
};
