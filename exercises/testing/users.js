const users = new Array(20).fill(0).map((_, i) => {
	return {
		id: i,
		createdAt: Date.now() + i,
		email: `readycoder${i}@gmail.com`,
	};
});

const fixId = (id) => +id;

// simulate async db call with promise
const findUser = (id) =>
	new Promise((resolve, reject) => {
		const fixedId = fixId(id);
		debugger;
		const user = users.find((user) => user.id === fixedId);
		if (user) {
			return resolve(user);
		}
		reject(new Error(`No user with id "${fixedId}"`));
	});

// simulate async db call with promise
const deleteUser = (id) =>
	new Promise((resolve, reject) => {
		const fixedId = fixId(id);
		const i = users.findIndex((user) => user.id === fixedId);

		if (i < 0) {
			return reject(new Error(`No user with id "${fixedId}"`));
		}

		users.slice(i, 1);
		resolve({ fixedId });
	});

module.exports = {
	findUser,
	deleteUser,
  fixId
};
