

// ACTIONS
export const MODE_DARK = "MODE_DARK";
export const MODE_MUSIC = "MODE_MUSIC";
export const GET_API = "GET_API";
export const PAGE = "PAGE";
export const PLATFORM = "PLATFORM"
export const FILTERS = "FILTERS"

export const  page = (num) => {
  return {
    type: PAGE,
    payload: num,
  };
};


export const  mode_dark = (boolean) => {
  return {
    type: MODE_DARK,
    payload: boolean,
  };
};
export const  mode_music = (boolean) => {
  return {
    type: MODE_MUSIC,
    payload: boolean,
  };
};

export const get_api = () => async (dispatch) => {
 const fet = await fetch('http://localHost:3001/videogames')
 const fet2 = await fetch('http://localHost:3001/platforms')
 const platform = await fet2.json()
 const api = await fet.json()

dispatch({
              type: GET_API,
              payload: api,
            })

dispatch({
              type: PLATFORM,
              payload: platform,
            })
            
}


export const filters = (filter) => async (dispatch) => {
  dispatch({type: FILTERS, payload: filter})
}



