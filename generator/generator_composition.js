function* genCompo(start, stop) {
   for (start; start <= stop; start++) {
    yield start;
   }
}



function* genCodes(arg) {
  yield* arg(0, 2);
  yield* arg(3, 5);
}



let result = genCodes(genCompo)


for (let code of result) console.log(code);
