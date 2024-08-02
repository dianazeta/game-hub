import axios from "axios";

// axios instance
export default axios.create({
  // custom configuration
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "7fe3f8f36df64437bf2b37239826ede7",
  },
});
