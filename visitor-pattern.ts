interface Visitor {
  visitElementA(element: ElementA): void;
  visitElementB(element: ElementB): void;
}

interface Visitable {
  accept(visitor: Visitor): void;
}

class ElementA implements Visitable {
  // Other code and business logic of this element
  accept(visitor: Visitor) {
    visitor.visitElementA(this);
  }
}

class ElementB implements Visitable {
  // Other code and business logic of this element
  accept(visitor: Visitor) {
    visitor.visitElementB(this);
  }
}

class ConcreteVisitor implements Visitor {
  visitElementA(element: ElementA) {
    console.log("Visited ElementA");
  }

  visitElementB(element: ElementB) {
    console.log("Visited ElementB");
  }
}

const elements: Visitable[] = [new ElementA(), new ElementB()];

const visitor = new ConcreteVisitor();
for (const element of elements) {
  element.accept(visitor);
}
