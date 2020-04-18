const { default: promiseAllLimit } = require('../build/promise-all-limit.js')

const testFunc = (i) => () =>
	new Promise((resolve, reject) => {
		try {
			console.log('Started', i)
			setTimeout(() => {
				console.log('Finished', i)
				resolve()
			}, Math.floor(Math.random() * 400) + 1)
		} catch (error) {
			reject(error)
		}

	})


const funcs = []

var i
for (i = 0; i < 154; i++) {
  funcs.push(testFunc(i))
} 

promiseAllLimit(funcs, 5)
	.then(() => {})
	.catch((error) => {})
