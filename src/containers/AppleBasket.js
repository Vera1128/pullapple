/**
 * Created by xyy on 2017/3/30.
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../styles/appleBasket.scss'
import AppleItem from '../components/AppleItem'
import actions from '../actions/appleActions';
import { bindActionCreators } from 'redux';

class AppleBusket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 1
    };
   }

   reduceOpacity(){
    this.setState(
      {
        opacity: 0.6
      }
    );
  };

  increaseOpacity(){
    this.setState(
      {
        opacity: 1
      }
    );
  };

  render(){
    let { state, actions } = this.props;
    //对 state 做显示级别的转化
    let stats = {
      appleNow: {
        quantity: 0,
        weight: 0
      },
      appleEaten: {
        quantity: 0,
        weight: 0
      }
    };

    state.apples.map(apple => {
      let selector = apple.isEaten ? 'appleEaten':'appleNow';
      stats[selector].quantity ++;
      stats[selector].weight += apple.weight;
    })

    return (
      <div className="appleBusket">
        <div className="title">苹果篮子</div>

        <div className="stats">
          <div className="section">
            <div className="head">当前</div>
            <div className="content">{stats.appleNow.quantity}个苹果，{stats.appleNow.weight}克</div>
          </div>
          <div className="section">
            <div className="head">已吃掉</div>
            <div className="content">{stats.appleEaten.quantity}个苹果，{stats.appleEaten.weight}克</div>
          </div>
        </div>

        <div className="appleList">
          {
            state.apples.map((apple,index)=>
              <AppleItem
                state={apple}
                actions={{eatApple: actions.eatApple}}
                key={new Date().getTime() + index}
              />
            )
          }
        </div>

        <div className="btn-div" style={{opacity: this.state.opacity}}>
          <button onClick={actions.pickApple} onTouchStart={this.reduceOpacity} onTouchEnd={this.increaseOpacity}>摘苹果</button>
        </div>
      </div>
    );
  }
}

function select(state) {
  console.log("贤惠姐修改了");
  console.log("杨杨修改了");
  return {
    state: state.apples
  }
}

function buildActionDispatcher(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}


export default connect(select, buildActionDispatcher)(AppleBusket);