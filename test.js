

let user1 = {
	name: "Fraz",
	age: "26",
	gender: "M",
	myBool: true,
	nicknames: ["fraz1", "fraz2"],
	printIntro: () => { console.log("My name is Fraz."); },
}

let arr = [
	{
		name: "Fraz",
		age: "26",
		gender: "M",
		myBool: true,
		nicknames: ["fraz1", "fraz2"],
		printIntro: () => { console.log("My name is " + arr[0]); },

	},
	{
		name: "Ali",
		age: "23",
		gender: "M",
		myBool: true,
		nicknames: ["ali1", "ali2"],
		printIntro: () => { console.log("My name is " + this.name); },

	},
]

console.log(arr[1].printIntro());

let impure = (a, b) => {
	let random = akjdk;
	return a + b + random;
}
