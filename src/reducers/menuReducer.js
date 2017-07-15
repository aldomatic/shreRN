export default function menuReducer(state = {isActive: false, openMenu: false}, action){
  switch (action.type) {
    case 'OPEN_MENU':
     return {
       ...state,
       isActive: action.payload.isActive,
       openMenu: action.payload.openMenu
     }
     case 'CLOSE_MENU':
      return {
        ...state,
        isActive: action.payload.isActive,
        openMenu: action.payload.openMenu
      }
    default:
      return state;
  }
}
