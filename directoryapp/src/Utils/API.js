import axios from "axios";

const url = "https://randomuser.me/api/";

export default {
  getUsers: function() {
    return axios.get(url);
  }
  .then(
    console.log(res)
  )
};