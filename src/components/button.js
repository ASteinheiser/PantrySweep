import React      from 'react'
import { Button } from 'react-native-material-ui'

export default class StyledButton extends React.Component {
  render() {
    return (
      <Button
        raised
        style={{
          container: {
            height: 50
          },
          text: {
            color:'rgba(255, 255, 255, 0.8)',
            fontWeight: 'bold',
            fontSize: 16
          }
        }}
        {...this.props}
      />
    )
  }
}
