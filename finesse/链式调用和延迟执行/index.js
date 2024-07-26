function arrange(val) {
  const task = [];
  task.push(() => {
    console.log(val);
  });
  function wait(time) {
    task.push(
      () =>
        new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, time);
        })
    );
    return this;
  }
  function waitFirst(time) {
    task.unshift(
      () =>
        new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, time);
        })
    );
    return this;
  }
  function dot(val) {
    task.push(() => {
      console.log(val);
    });
    return this;
  }
  function execute() {
    (async () => {
      for (const item of task) {
        await item();
      }
    })();
    return this;
  }
  return {
    wait,
    dot,
    execute,
    waitFirst
  };
}
arrange('William').wait(5000).dot('commit').waitFirst(3000).execute();
// 等待3秒
// > William
// 等待5秒
// >start to comit
