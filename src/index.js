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
const fourthPromise = async () => {
 let data = await firstPromise();
 return data;
}

/* Make a change to transform this function to a async function */
async function fifthPromise(isError) {
  let promiseFive = new Promise((resolve, reject) => {
    if (isError) {
      reject({ message: 'error' });
    } else {
      resolve('done');
    }
  })
  try {
    return await promiseFive;
  }
  catch (error) {
    return error;
  }
}