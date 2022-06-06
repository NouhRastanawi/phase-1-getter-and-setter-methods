const pi = Math.PI;

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius * 2;
  }

  get circumference() {
    return this.radius * 2 * pi;
  }

  get area() {
    return this.radius ** 2 * pi;
  }

  set diameter(diameter) {
    this.radius = diameter / 2;
  }
  set circumference(circumference) {
    this.radius = circumference / (2 * pi);
  }

  set area(area) {
    this.radius = Math.sqrt(area / pi);
  }
}

// let c1 = new Circle(9);
// console.log(c1.area);
// console.log(c1.circumference);
// console.log(c1.diameter);
// c1.diameter = 9999;
// console.log(c1.diameter);