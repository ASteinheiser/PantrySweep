import React        from 'react'
import { ListItem } from 'react-native-material-ui'

export default class StyledListItem extends React.Component {
  render() {
    return (
      <ListItem
        divider
        numberOfLines={1}
        style={{
          container: {
            height: 70
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
