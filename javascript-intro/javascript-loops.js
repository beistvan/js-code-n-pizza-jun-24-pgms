//ciklusok

for (let i = 0; i < 10; i = i + 1) {
  console.log(i);
}
// minden 3-an osztható szám 100 és 1000 között
for (let i = 100; i <= 1000; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

for (let i = 102; i <= 999; i += 3) {
  console.log(i);
}

for (let i = 999; i <= 102; i -= 3) {
  console.log(i);
}
