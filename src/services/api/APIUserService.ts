import axios from "axios";
import { API_URL } from "../../config/config";

export class APIUserService {

  private base_url: string = `${API_URL}users`

  async getAll() {
    try {
      const response = await axios.get(this.base_url);
      return response.data;
    } catch(err) {
      console.log(err);
    }
  }
}