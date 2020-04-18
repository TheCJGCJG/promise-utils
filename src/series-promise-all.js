import * as CONSTANTS from './constants'
import promiseAllLimit from './promise-all-limit'

export default (funcs) => promiseAllLimit(funcs, CONSTANTS.DEFAULT_SERIES_LIMIT)

