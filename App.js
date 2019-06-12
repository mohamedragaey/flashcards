import React, {Component} from 'react'
import {View} from 'react-native'
import {createStore} from 'redux'
import {black} from './utils/colors'
import reducer from './reducers'
import {Provider} from 'react-redux'

import {setLocalNotification} from './utils/helpers'
import CustomStatusBar from './components/StatusBar'
import AppStack from './navigation'

class App extends Component {
  componentDidMount() {
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <CustomStatusBar backgroundColor={black} barStyle="light-content"/>
          <AppStack/>
        </View>
      </Provider>
    )
  }
}

export default App
