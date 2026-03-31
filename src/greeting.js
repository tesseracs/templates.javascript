/** Example class in a separate module — imported from `index.js` (ESM). */
export class Greeter {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello from ${this.name} (JavaScript template)`;
  }
}
