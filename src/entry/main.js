/**
 * Created by xyy on 2017/3/31.
 */
var React = require('react');
var ReactDom = require('react-dom');
import { createStore, bindActionCreators } from 'redux';
import { Provider } from 'react-redux'
import AppleBusket from '../containers/AppleBasket'
import appleBasket from '../reducers/appleBasketReducer'
let store = createStore(appleBasket);

ReactDom.render(
  <Provider store={store}>
    <AppleBusket />
  </Provider>,
  document.getElementById('content')
)