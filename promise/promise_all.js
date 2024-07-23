/**
 * Working with Promise.all()
 * This receives an iterable that contains promises and returns a
 * Return: promise
 */
let promise = Promise.all([
  new Promise((res, rej) => setTimeout(res('Done in 1 sec'), 1000)),
  new Promise((res, rej) => setTimeout(res('error'), 5000)),
  new Promise((res, rej) => setTimeout(res('Done in 3 secs'), 3000))
]).then((res) => console.log(res)).catch(console.log);

