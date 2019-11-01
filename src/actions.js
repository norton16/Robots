import {CHANGE_SEARCH_FIELD} from './constants.js'

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})
//intakes text, returns object w/ type changesearchfield and sends the input as payload
//action -> constants -> reducers -> store (object) ->