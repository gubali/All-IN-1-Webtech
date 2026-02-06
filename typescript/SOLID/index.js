var UniqueMarker = /** @class */ (function () {
    function UniqueMarker(name, color, year, price) {
        this.name = name;
        this.color = color;
        this.year = year;
        this.price = price;
    }
    return UniqueMarker;
}());
var uniqueMarkerInstance = new UniqueMarker('test', 'red', 2021, 10);
console.log(uniqueMarkerInstance);
