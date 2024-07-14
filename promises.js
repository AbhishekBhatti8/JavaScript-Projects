import fetch from "node-fetch";

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

const promiseFour = new Promise (function(resolve, reject){
    setTimeout(() => {
        let error = false;

        if (!error){
            resolve({status: "Saved", timeStamp: Date.now()})
        } else {
            reject("Error: Data not saved")
        }
    }, 1000);
})

promiseFour.then((status)=>{
    console.log(status);
    return status.status
}).then(function(status){
    console.log(status);
}).catch(function (error){
    console.log(error)
}).finally(function(){
    console.log("promise has been resolved or rejected");
})

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;

    if (!error) {
      resolve({ userName: "javaScript", Pass: "1234" });
    } else {
      reject("Error: JS file not found");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

fetch("https://jsonplaceholder.typicode.com/users")
  .then(function (res) {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
