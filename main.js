let fruits = ['apple', 'banana', 'cherry'];
let fruits1 = fruits.toString();

// console.log(fruits1);

let num = [10,20,30,40,50];
let num1 = num.at(2);

// console.log(num1);

let color = ['red','greeen','blue'];
let separated = ('-');
let threes = color.join(separated);

// console.log(threes);

let array = [1,2,3,4,5];
array.pop();

// console.log(array);

let five = ['apple','banana']
five.push('grape');
// console.log(five);

let six = ['car','bike','bus'];
six.shift();
// console.log(six);

let seven = ['boat','ship'];
seven.unshift('train','plane');
// console.log(seven);


let eight = ['dog','cat','bird'];
delete eight[1];

// console.log(eight);


let nine = [1,2.3];
let ninee = [4,5,6];
let nines = nine.concat(ninee);
// console.log(nines);

let ten = ['a','b','c','d','e','f'];
ten.splice(2,2 );
// console.log(ten);

let eleven = ["first","second","third","fourth","fifth","sixth","seventh","eight","nineth"];
let elevens = eleven.at(4);
// console.log(elevens);

let longstring = ["appla banana cherry date elderberry fig grape honeydew kiwi lemon mango nectarine orange papaya quince respberry strawberry tangerine ugli vine watermelon yam zucchini apricot blackberry cantaloupe elderberry fannel grapefruit honeycrisp jackfruit kumquat lime melon nector olive peach pear plum pomegranate rhubarb starfruit tomato vanila"]
let index = longstring.indexOf('fennel');
// console.log(index);


let thirteen = ['apple','banana','cherry','date','fig'];
thirteen.pop();
thirteen.pop();
// console.log(thirteen);


let forteen = ["dog","cat","fish","bird"];
let fortee = ",";
let forteens = forteen.join(fortee);
// console.log(forteens);



let fifteen = ['b','c','d'];
fifteen.splice(0,0,'a','b','c');
// console.log(fifteen);


let sixteen = ['apple','banana','orange'];
let sixteens = sixteen.join('-');
// console.log(sixteens);


let seventeen = [1,2,3,4,5,6];
delete seventeen[3];
// console.log(seventeen);




let eighteen = [1,2,3];
let eighteeen = [4,5,6];
let total = eighteen.concat( eighteeen);
let totals = total.slice(0,4);
// console.log(totals);



let nineteen = ['a','b','c','d','e'];
nineteen.splice(1,2,'x','y');
// console.log(nineteen);




let twenty = [10,20,30,40,50];
let twentys = twenty.slice(1,4);
// console.log(twentys);



let twentyone = [1,2,3,4,5];
let twentyones = twentyone.toString();
let strings = twentyones.split(',');
console.log('string',twentyones);
// console.log('array of strings',strings);




let twentytwo = ['a','b','c','d','e','f'];
let first = twentytwo.at(0);
let last = twentytwo.at(-1);
console.log(first);
console.log(last);