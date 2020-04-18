import * as CONSTANTS from './constants'

export default (funcs, limit = CONSTANTS.DEFAULT_PARALLEL_LIMIT) =>
	new Promise((resolve, reject) => {

		const waiting = [].concat(funcs)
		const completed = []
		let running = CONSTANTS.NUMBER_ZERO
		let shouldContinue = true

		const finish = async () => {
			const result = await Promise.all(completed)
			resolve(result)
		}

		const fail = async (error) => {
			reject(error)
		}

		const run = async () => {

			try {
				const runningFuncPromise = waiting.shift()()
				completed.push(runningFuncPromise)

				await runningFuncPromise
		  	if (waiting.length > CONSTANTS.NUMBER_ZERO && shouldContinue) {
		  		run()
		  	} else {
		  		finish()
		  	}
			} catch (error) {
		  	shouldContinue = false
		  	fail(error)
			}

		}


		for (let i = CONSTANTS.NUMBER_ZERO; i < limit; i++) {
			run()
		}

	})
