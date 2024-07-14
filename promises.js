const promiseOne = new Promise(function (resolve, reject) {
  //Do an async Task
  setTimeout(() => {
    console.log("Asnc task is complete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("promise is resolved");
});

new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("async task 2 completed");
    resolve();
  }, 1000);
}).then(function () {
  console.log("task 2 resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({
      userName: "Abhishek",
      email: "abhishekbhatti89@gmail.com",
    });
  }, 1000);
});

promiseThree.then(function (user) {
    console.log(user)
});
