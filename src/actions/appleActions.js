/**
 * Created by xyy on 2017/4/1.
 */
let actions = {
  eatApple : (id)=>{
    return {
      type: 'EAT_APPLE',
      payload: id
    }
  },

  pickApple: ()=>{
    return {
      type: 'PICK_APPLE'
    }
  }
}
export default  actions;
