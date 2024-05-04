export const sleep = (duration = 2000) => {
	return new Promise((res) => {
		setTimeout(res, duration);
	});
};
