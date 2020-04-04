'use struct';

// - to string
// 1)
String(null);
console.log(String(null));
console.log(typeof(String(null)));
console.log(String(44));
console.log(typeof(String(44)));

// 2)
console.log("ww"+"err");
console.log("ww"+55);
console.log(typeof("ww"+55));
console.log("ww"+true);
console.log(typeof("ww"+true));

// to number
// 1)
console.log(Number("44"));

// 2)
console.log(typeof(+'55'));
console.log(typeof(5 + +'55'));
console.log(5 + +'55');

// 3)
console.log(parseInt("15px", 10));
console.log(typeof(parseInt("15px", 10)));
let ans = prompt("Hello?", '');
console.log(typeof(ans));
console.log(ans);

//0, '', null, undefined, NaN  -- false
let switcher = null;
if (switcher) {
    console.log('Working..');
}
switcher = 1;
if (switcher) {
    console.log('Working..');
}

// 2)
console.log(typeof(Boolean('55')));
// 3)
console.log(typeof(!!'55'));
