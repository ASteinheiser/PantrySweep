import React from 'react'
import { View, StyleSheet } from 'react-native'
import Camera from 'react-native-camera'

import Loading from '../components/loading.js'

class CameraApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false
    }
  }

  scanBarcode() {
    this.camera.capture()
      .then(data => {
        // this.props.navigation.back()
        this.setState({ loading: true })
        // RNFetchBlob.fs.readFile(data.path, 'base64')
          // .then((image) => {
            // var options = {
            //   method: 'POST',
            //   headers: {
            //     'Accept': 'application/json',
            //     'Content-Type': 'application/json'
            //   },
            //   body: JSON.stringify({ image: image })
            // }
            // fetch('http://34.204.40.255/recognition', options)
            //   .then(response => response.json())
            //   .then(responseJson => this.props.navigation.navigate('control', { device: responseJson }))
            //   .catch(error => console.error(error))
          // })
      })
      .catch(err => console.error(err))
  }

  render() {
    var display = (<Camera
                    ref={(cam) => { this.camera = cam }}
                    captureTarget={Camera.constants.CaptureTarget.temp}
                    style={styles.preview}
                    aspect={Camera.constants.Aspect.fill}>
                    <Text style={styles.capture} onPress={this.scanBarcode.bind(this)}>[CAPTURE]</Text>
                  </Camera>)

    if (this.state.loading) display = <Loading />

    return (
      <View style={styles.container}>
        {display}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
})

export default CameraApp
