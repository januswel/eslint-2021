export function main() {
  console.log("foo");

  return 1;
}

main();

const a = 0;

export class A {
  #a: number;

  constructor(a: number) {
    this.#a = a;
  }

  foo() {
    console.log(this.#a);
    return this.#a;
  }
}

const b = new A(42);
b.foo();
