// Javascript promises

/** let promise = new Promise( function (resolve, reject) {
*    throw new Error('An error occurred!');
* }).then( function (resolved) {
*    if (resolved) console.log(resolved);
* }).catch(function (error) {
*    if (error) console.log(error)
* });
*/


// Using the arrow function 
let promise2 = new Promise((res, rej) => {
  let rand = Math.floor( Math.random() * (20 - 10) + 10);
  if (rand >= 10) res('The value from random is '+ rand);
  rej('The value from random is ', rand);
})
  .finally(() => {
    console.log('Promise completed successfully');
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log('An error occured');
    console.log(err);
  });


// console.log(promise);
console.log(promise2);
