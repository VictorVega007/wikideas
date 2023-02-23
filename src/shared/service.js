import axios from "axios";

const url = "https://wikideas-adriana75.vercel.app/api/v1/topics";

export const getTopics = async () => {
  try {
    const response = await axios.get(url);
    const data = await response.data;
    // console.log(data);
    return data;
  } catch (error) {
    // console.log(error);
    return error.message;
  }
};

const { data } = getTopics();

console.log(data);
