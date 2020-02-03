import endPoint from "./endpoint.js";

export default {
  get() {
    return endPoint.get();
  },
  post() {
    return endPoint.post("/teachers");
  }
};
