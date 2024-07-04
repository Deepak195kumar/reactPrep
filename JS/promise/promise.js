function getData(dataId, nextData) {
  setTimeout(() => {
    console.log(dataId);
    if (nextData) nextData();
  }, 1000);
}

// Callback hell - Nested callbacks stacked on below other forming pyramid structure.
// This type of programming become difficult to understand and manage.
// This is a callback-based approach to retrieve data in a sequential manner | call-back hell.

getData(1, () => {
  getData(2, () => {
    getData(3, () => {
      getData(4);
    });
  });
});

// PROMISES
// Promises ar eventual completion of tasks. IT's an Object in JS. IT's a solution for call back hell
// ------------------------then----------------------------------------
const getDataProm = (dataId) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(dataId);
      resolve();
    }, 1000);
  });

getDataProm(2).then((data) =>
  getDataProm(3)
    .then((data) => getDataProm(4))
    .then((data) => getDataProm(1))
);

// --------------------------Async -  Await --------------------------------------

const asy = async () => {
  await getDataProm(1);
  await getDataProm(2);
  await getDataProm(3);
};
asy();

// --------------------------or --------------------------------------
// IIFE
(async () => {
  await getDataProm(1);
  await getDataProm(2);
  await getDataProm(3);
})();
