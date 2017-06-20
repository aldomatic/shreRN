export default function menuReducer(state = {isActive: false}, action){
  switch (action.type) {
    case 'OPEN_MENU':
     return {
       ...state,
       isActive: action.payload.isActive
     }
     case 'CLOSE_MENU':
      return {
        ...state,
        isActive: action.payload.isActive
      }
    default:
      return state;
  }
}
