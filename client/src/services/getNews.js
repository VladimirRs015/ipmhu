import endpoint from "./endpoint.js";

const url = "news";
export default {
  get() {
    endpoint.get(url);
  }
};
