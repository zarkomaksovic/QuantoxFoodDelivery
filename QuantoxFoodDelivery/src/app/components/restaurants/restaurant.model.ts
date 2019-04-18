export class Restaurant {
  name: string;
  image: string;
  adress: string;
  phone: number;
  description?: string;

  constructor(
    name: string,
    image: string,
    adress: string,
    phone: number,
    description?: string
  ) {
    this.name = name;
    this.image = image;
    this.adress = adress;
    this.phone = phone;
    this.description = description;
  }
}


