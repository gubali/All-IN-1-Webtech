class Marker {
  name: string;
  color: string;
  year: number;
  price: number;
  constructor(name:string, color:string, year:number, price:number) {
    this.name = name;
    this.color = color;
    this.year = year;
    this.price = price;
  }
}


class Invoise {
    privae marker:Marker;
    quantity: number;
    constructor(marker:Marker, quantity:number) {
        this.marker = marker;
        this.quantity = quantity;
    }
    getAmount() {
        return this.marker.price * this.quantity;
    }
}