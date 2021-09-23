export default (state, action) => {
    switch(action.type) {
      case 'GET_TEMA':
        return {
          ...state,
          dat: action.payload,
          loading: false
        } 
      case 'START_LOADING':
        return {
          ...state,
          loading: true
        }              
      case 'PRODUCT_ERROR':
        return {
          ...state,
          error: action.payload
        }      
      case 'RELATED_PRODUCT':
        return{
          ...state,
          rela: action.payload,
          loading: false
        }  
      default:
        return state;
    }
  }