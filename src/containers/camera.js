import React                        from 'react'
import { View, StyleSheet, Text }   from 'react-native'
import { Icon, Subheader, Toolbar } from 'react-native-material-ui'
import { NavigationActions }        from 'react-navigation'
import Camera                       from 'react-native-camera'

class CameraApp extends React.Component {
  scanBarcode(e) {
    this.camera.capture()
      .then(data => {
        this.props.navigation.dispatch(NavigationActions.reset({
          index: 0,
          actions: [ NavigationActions.navigate({ routeName: 'AddItem', params: { barcode: e.data }}) ]
        }))
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <View style={styles.container}>
        <Toolbar
          centerElement='Scan Barcode'
          leftElement='arrow-back'
          onLeftElementPress={()=>{this.props.navigation.goBack()}}
        />
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          captureTarget={Camera.constants.CaptureTarget.temp}
          onBarCodeRead={this.scanBarcode.bind(this)}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
})

export default CameraApp
