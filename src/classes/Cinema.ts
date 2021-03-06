import { CinemaAPIType } from '../interfaces/Api';

export default class Cinema {
  public id: number;
  public title: string;
  public city: string;

  constructor(json: CinemaAPIType) {
    this.id = json.id as number;
    this.title = json.title;
    this.city = json.city;
  }
}
