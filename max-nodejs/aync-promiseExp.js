setTimeout(() => {
  console.log("Time values after: 2ms");
}, 0);
console.log("12");
console.log("13");

const fetchData = (callback) => {
  setTimeout(() => {
    callback("done");
  }, 1500);
};
setTimeout(() => {
  console.log("callback done!");
  fetchData(() => {});
}, 2000);
