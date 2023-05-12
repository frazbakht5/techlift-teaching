
const foo = (callback) => {
	setTimeout(() => {
		console.log("In foo");
		callback();
	}, 4000);
}

const bar = () => {
	console.log("From bar");
	return "2";

}


const dummy = () => {
	setTimeout(() => {
		console.log("From dummy");
		return "3";

	}, 1000);
}



console.log(foo(bar));

