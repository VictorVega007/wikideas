import axios from "axios";

const getClient = (url) => {
  return axios.create({
    baseURL: url,
  });
}

export const getTopics = async () => {
  try {
    const client = getClient(`https://wikideas-back.vercel.app/api/v1/topics`)
    const response = client.get();
    const data = (await response).data;
    return data;
  } catch(error){
    return error.message;
  }
};

export const getTopicById = async (id) => {
  try {
    const client = getClient(`https://wikideas-back.vercel.app/api/v1/topics/${id}`)
    const response = client.get();
    const data = (await response).data;
    return data;
  } catch(error){
    return error.message;
  }
}

export const getTopicsByCategory = async (category) => {
  try {
      const client = getClient(`https://wikideas-back.vercel.app/api/v1/topics/?category=${category}`)
      const response = client.get();
      const data = (await response).data;
      return data;
    } catch(error){
      return error.message;
    }
}

export const getCategory = async (id) => {
  try {
      const client = getClient(`https://wikideas-back.vercel.app/api/v1/categories/${id}`)
      const response = client.get();
      const data = (await response).data;
      return data;
    } catch(error){
      return error.message;
    }
}

export const getCategories = async () => {
  try {
      const client = getClient(`https://wikideas-back.vercel.app/api/v1/categories`)
      const response = client.get();
      const data = (await response).data;
      return data;
    } catch(error){
      return error.message;
    }
}

export const enviarDatos = async (datos) => {
  const respuesta = await fetch('https://wikideas-back.vercel.app/api/v1/topics/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  });
  const respuestaJson = await respuesta.json();
  return respuestaJson;
};

export const updateTopic = async (datos) => {
  const id = datos.id;
  const respuesta = await fetch(`https://wikideas-back.vercel.app/api/v1/topics/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  });
  const respuestaJson = await respuesta.json();
  return respuestaJson;
};

