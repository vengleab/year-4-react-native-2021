export const ACTION = {
  SET_TOKEN: 'SET_TOKEN',
}

export const setToken = token => {
  return {
    type: ACTION.SET_TOKEN,
    payload: token,
  }
} 