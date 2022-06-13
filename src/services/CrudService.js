import axios from "axios";
const CRUD_API_URL = "http://localhost:8081/api/methods";

class CrudService {
  getUsers() {
    return axios.get(CRUD_API_URL + "/users", {
      "Response-type": "application/json",
    });
  }

  getUsersWithReversedNames() {
    return axios.get(CRUD_API_URL + "/userswithreversednames", {
      "Response-type": "application/json",
    });
  }
}

export default new CrudService();
