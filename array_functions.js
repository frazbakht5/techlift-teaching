
let myArr = [1, 2, 3, 4, 5];

const addToAllElements = (array, num) => {

	for (let i = 0; i < array.length; i++) {
		let element = array[i];

		if (element == 2) {
			continue;
		}

		array[i] = element + num;
	}
}


let array2 = myArr.map((element) => {
	let ans = element + 5;
	return ans;
});

let isEvenNumber = (element) => {
	// return element % 2 == 0 ? true : false;
	return element > 8 ? true : false;
}

let firstEvenNumber = myArr.find(isEvenNumber);

let allEvenNumbersInArray = myArr.filter(isEvenNumber);

let sortedArray = myArr.sort();

let reduceAdd = (total, num) => {

	console.log("total ===> ", total);
	console.log("num ===> ", num);
	console.log();
	return total - num;
}

let reduced = myArr.reduce(reduceAdd);

console.log(myArr);
// console.log(array2);
// console.log(firstEvenNumber);
// console.log(allEvenNumbersInArray);
// console.log(sortedArray);
console.log(reduced);



let users = [
	{}
];

const createUser = (newUserBody) => {
	users.push(newUserBody);
}

const readUser = (id) => {
	let callback = (user) => {
		return user.id == id ? true : false;
	}

	return users.find(callback)
}

/*

let updateBody = {
	gender: "F"
}

*/
const updateUser = (id, updateBody) => {
	let callback = (user, index) => {
		if (user.id == id) {
			let updatedUser = {
				...user[index],
				...updateBody
			}

			user[index] = updatedUser;
			return true;
		}
		else
			return false;
	}

	users.find(callback)
}

const deleteUser = (id) => {
	let callback = (user, index) => {
		if (user.id == id) {
			users.splice(index, 1)
			return true;
		}
		else
			return false;
	}

	users.find(callback)
}