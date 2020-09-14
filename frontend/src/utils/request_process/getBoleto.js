import axios from "axios";

async function getBoleto(client_data) {
  console.log("getboleto...");
  try {
    const response = await axios.post("http://localhost:1337/boleto/create", {
      client_data,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export default getBoleto;
