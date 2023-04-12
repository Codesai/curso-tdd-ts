# Tire Pressure Monitoring System Variation

## Goal
Be able to test `Alarm`'s `check` function without changing the method signature.

1. Test the code using test doubles created with a library (ts-mockito).

2. Test the code using test doubles created by you.

## Tools
* [Jest](https://jestjs.io/en/)
* [Expect - Jest](https://jestjs.io/docs/en/expect.html)
* [ts-mockito](https://github.com/NagRock/ts-mockito)

### Example of spying an interaction
```typescript
interface Collaborator {
    collaborate(): void;
}

class MyClass {
    private collaborator: Collaborator;
    
    constructor(collaborator: Collaborator) {
        this.collaborator = collaborator;
    }

    run(): void {
        this.collaborator.collaborate();
    }
}

test('example of a spying an interaction', () => {
    const collaborator = mock<Collaborator>();
    const myClass = new MyClass(instance(collaborator));

    myClass.run();

    verify(collaborator.collaborate()).once();
});
```

### Example of stubbing an interaction

```typescript
interface Collaborator {
    collaborate(): string;
}

class MyClass {
    private collaborator: Collaborator;
    
    constructor(collaborator: Collaborator) {
        this.collaborator = collaborator;
    }

    run(): void {
        return this.collaborator.collaborate();
    }
}

test('example of a stubbing an interaction', () => {
    const collaboratorResponse = "some response";
    const collaborator = mock<Collaborator>();
    when(collaborator.collaborate()).thenReturn(collaboratorResponse);
    const myClass = new MyClass(instance(collaborator));

    const result = myClass.run();

    expect(result).toBe(collaboratorResponse);
});
```

## Learnings
How to build a Spy and a Stub manually.

How to use Jest to generate the test doubles.

## References

Based on an exercise from [Luca Minudel](https://twitter.com/lukadotnet?lang=en)'s [TDD with Mock Objects And Design Principles exercises](https://github.com/lucaminudel/TDDwithMockObjectsAndDesignPrinciples)