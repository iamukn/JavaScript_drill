function readData() {
let data = '{"age": 25}';

try {
  let new_user = JSON.parse(data);
  if (!new_user.name) {
     throw new SyntaxError('Incorrect data');
  }
  console.log('Hello World!!');
}
catch (error) {
  if (error instanceof SyntaxError) {
    console.log(`A syntax error occurred: ${error.message}`)
  }
  throw error;
}
}

try {
  readData();
} catch (err) {
  console.log('New error caught: ' + err.message);
}
