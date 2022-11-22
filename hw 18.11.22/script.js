let n;
let fromRod;
let toRod;
let additionalRod;

function sovle(n, fromRod, toRod, additionalRod) {
  if (n === 1) {
    console.log(`Переносим 1 диск с стержня ${fromRod} на стержень ${toRod}`);
    return;
  }
  sovle(n - 1, fromRod, additionalRod, toRod);
  console.log(
    `Переносим ${n} диск с стержня ${fromRod} на стержень ${toRod} с диском ${additionalRod}`
  );
  sovle(n - 1, additionalRod, toRod, fromRod);
}

/* console.log(`Перенсти диск ${n} с ${fromRod} на ${toRod}`); */

sovle(3, 1, 3, 2);