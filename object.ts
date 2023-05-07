class Phones {
  constructor(
    public model: string,
    public camera: string,
    public price: number
  ) {}

  public phonePrice() {
    console.log(
      `Model: ${this.model} camera:${this.camera}, price:${this.price}`
    );
  }
}

const phone1 = new Phones("Iphone", "12MP", 12000);
phone1.phonePrice();
