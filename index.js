function compose(...middlewares) {
    let forRes = [];
    // let i = 0;
  
    async function middle(i, input) {
      if (i >= middlewares.length) return;
      if (i === 0) {
        forRes = {
          req: { ...input },
          res: {
            id: i,
            ...input,
          },
        };
      }
  
      async function next() {
        return new Promise(async () => {
          if (i >= middlewares.length) return;
          await middle(i+1,forRes);
        });
      }
  
      await middlewares[i](forRes, next);
      if (i >= middlewares.length) return;
    }
  
    return input => middle(0, input);
}

module.exports = compose;