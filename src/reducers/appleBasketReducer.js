/**
 * Created by xyy on 2017/3/31.
 */
import { combineReducers } from 'redux'
import { fromJS } from 'immutable';

let initSate = {
  isPicking: false,
  newAppleId: 4,
  weight: 100,
  apples: [
    {
      id: 1,
      weight: 235,
      isEaten: false
    },
    {
      id: 2,
      weight: 256,
      isEaten: false
    },
    {
      id: 3,
      weight: 100,
      isEaten: false
    }
  ]
};

function eatApples(state = initSate, action) {
  let newState;
  switch (action.type){
    case 'EAT_APPLE':
      /*
      改变state方法1 浅拷贝
      newState = Object.assign({}, state, {
        apples: [
          ...state.apples.slice(0, action.payload - 1),
          Object.assign({}, state.apples[action.payload - 1], { isEaten: true }),
          ...state.apples.slice(action.payload )
        ]
      })*/
      //使用immutable.js按需加载
      return fromJS(state).setIn(['apples',action.payload - 1,'isEaten'], true).toJS();
    case 'PICK_APPLE':
      newState = Object.assign({}, state, {
        apples: [
          ...state.apples,
          {
            id: state.newAppleId,
            weight: state.weight,
            isEaten: false
          }
        ],
        newAppleId: state.newAppleId + 1,
        isPicking: false
      })
      return newState;
    default:
      return state
  }
}
const appleBasket = combineReducers({
  apples: eatApples
})

export default appleBasket



