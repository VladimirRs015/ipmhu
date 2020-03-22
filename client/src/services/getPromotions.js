import endpoint from "./endpoint";

const url = "teachers";
export default {
  get() {
    // console.log("mama");
    return endpoint.get(url);
  }
};
