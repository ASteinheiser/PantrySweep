import React          from 'react'
import { StyleSheet } from 'react-native'
import { ListItem }   from 'react-native-material-ui'
import { fade }       from 'material-ui/utils/colorManipulator'
import { white }      from '../../colors.js'

export default class StyledListItem extends React.Component {
  render() {
    return (
      <ListItem
        numberOfLines={1}
        style={{
          container: {
            height: 70,
            borderBottomWidth: 2,
            borderBottomColor: fade(white, 0.1),
          },
          primaryText: {
            fontSize: 16
          }
        }}
        {...this.props}
      />
    )
  }
}
