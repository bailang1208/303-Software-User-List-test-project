import { APIUserService } from "./api/APIUserService";

export class APIService {

  private _user: APIUserService;

  constructor() {
    this._user = new APIUserService();
  }

  public get user() {
    return this._user;
  }
}