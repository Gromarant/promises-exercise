// FIRST PART

function firstPromise() {
  let promiseOne = new Promise((resolve, reject) => {
    resolve('done');
  });
  return promiseOne;
}

function secondPromise() {
  /* Write your code here */
}

function thirdPromise(isError) {
  /* Write your code here */
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
