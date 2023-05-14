// FIRST PART

function firstPromise() {
  let promiseOne = new Promise((resolve, reject) => {
    resolve('done');
  });
  return promiseOne;
}

function secondPromise() {
  let promiseTwo = new Promise((resolve, reject) => {
    reject('error');
  });
  return promiseTwo;
}

function thirdPromise(isError) {
  let promiseThree = new Promise((resolve, reject) => {
    if(!isError) {
      resolve('done');
    } else {
      reject('error');
    }
  })
  return promiseThree
}

// SECOND PART ASYNC/AWAIT

/* Make a change to transform this function to a async function */
function fourthPromise() {
  /* Change this with async/await*/
  firstPromise().then();
}

/* Make a change to transform this function to a async function */
function fifthPromise(isError) {
  /* Write your code here */
}
