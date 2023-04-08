const {MODE_DARK,MODE_MUSIC,GET_API, PAGE, PLATFORM, FILTERS} = require("./Actions.js")
const { createStore, applyMiddleware, compose } = require('redux');
const thunk = require('redux-thunk');



const default_videoGame_state = {
    mode: false,
    music: false,
    api:[],
    apiCopi:[],
    page:1,
    platform:[]
  };
  
  const videoGame_state = (state = default_videoGame_state, action) => {
    switch (action.type) {
      case MODE_DARK: {
        return {
          ...state,
          mode: !state.mode,
          
        };
      }
      case MODE_MUSIC: {
        return {
          ...state,
          music: !state.music,
          
        };
      }
      case GET_API: {
        return {
          ...state,
          api: action.payload,
          apiCopi:action.payload
        
        };
      }
      case PAGE: {
        return {
          ...state,
          page:action.payload,
          
        };
      }
      case PLATFORM: {
        return {
          ...state,
          platform:action.payload,
          
        };
      }
      case FILTERS: {
        return {
          ...state,
          api:action.payload,
          
        };
      }
      default:
        return state;
    }
  };
  //STORE
  const composeEnhancers =
  (typeof window !== 'undefined' &&
     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
  
   export const store = createStore(
    videoGame_state, composeEnhancers(applyMiddleware(thunk.default))
  );
  
 