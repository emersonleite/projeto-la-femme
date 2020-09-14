import axios from "axios";

async function generateSession() {
  const response = await axios.get("http://localhost:1337/session/create");
  return response;
}

export default generateSession;
