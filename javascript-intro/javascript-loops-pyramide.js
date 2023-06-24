n = 5;
for (let i = 1; i <= 5; i++) {
  s = "";
  for (let j = 1; j <= i; j++) {
    s += j;
  }
  console.log(s);
}

n = 5;

s = '';

for(let i = 1; i <= n; i++) {
  s += i;
  console.log(s);
}

n = 5;
for (let i = 1; i <= 5; i++) {
  s = 1;
  for (let j = 2; j <= i; j++) {
    s *= 10;
    s += j;
  }
  console.log(s);
}

n = 4;

for (i = 1; i <= n; i++) {
  st = "";
  for (j = 1; j <= n - i; j++) {
    st += ".";
  }
  o = "";
  for (j = 1; j <= 2 * i - 1; j++){
    o += "O";
  }
  
  console.log(st + o);
}
/*
4
3 1
2 3
1 5
0 7

n-k 2k-1, k = 1..n
1 3 1
2 2 3
3 1 5
4 0 7
*/

n = 7;
p = n - 1;
o = 1;

for (let i = 1; i <= n; i = i + 1) {
  let s = "";
  for ( let j = 1; j <= p; j++ ) {
    s = s + ".";
  }
  //...
  for ( let j = 1; j <= o; j++ ) {
    s = s + "o";
  }
  //...
  p = p - 1;
  o = o + 2;
  console.log(s);
}

//Python code: (. - dot is a space)
//n = 4; [print("."*(n - i), "o"*(2 * i - 1)) for i in range(1, n + 1)]
