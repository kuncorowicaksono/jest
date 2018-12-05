const compose = require(`../`);

describe(`Compose`, () => {
  it(`should run functions in expected order`, () => {
    // expect(true).toBeTruthy();
    // expect(false).toBeFalsy();
    // const bla = `bla`;
    // expect(bla).toStrictEqual(`bla`);

    // const expected = [1, 1, 1].every(value => value === 1);
    // expect(expected).toBeTruthy();
    // [1, 1, 1].forEach((value) => {
    //   expect(value).toStrictEqual(1);
    // });

    // function err() {
    //   throw new TypeError();
    // }

    // expect(() => {
    //   err();
    // }).toThrowError();

    const arr = [];
    const stack = [];

    stack.push(async (ctx, next) => {
      arr.push(1);
      await next();
      arr.push(6);
    });
    stack.push(async (ctx, next) => {
      arr.push(2);
      await next();
      arr.push(5);
    });
    stack.push(async (ctx, next) => {
      arr.push(3);
      await next();
      arr.push(6);
    });

    compose(...stack)();
    expect(arr).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });

  // should work if called twice
  // should throw error if next called twice
  // should return last value of ctx.res
  // it(`should `)
});