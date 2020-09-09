import axios from "axios";

async function getSession() {
  try {
    const response = await axios.get("http://localhost:1337/session/create");
    const { data } = response;
    const session = data.replace(/<[^>]+>|\\n+/g, "");
    console.log("session =>", session);
    return session;
  } catch (error) {
    console.log(error);
  }
}
export default getSession;
