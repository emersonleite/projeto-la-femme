import axios from "axios";

async function getRequestNumber(client_data) {
  console.log("gerando numero de pedido...");
  try {
    const response = await axios.post("http://localhost:1337/request/create", {
      client_data,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export default getRequestNumber;
