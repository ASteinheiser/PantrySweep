import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import { Button, ListItem, Icon } from 'react-native-material-ui'
import styled from 'styled-components/native'
import _ from 'lodash'

class ScheduleOverview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      taskList: [],
      temp: 0
    }
  }

  addTask = () => {
    this.setState({ taskList: [...this.state.taskList, { id: this.state.taskList.length++, name: 'Task_1', active: true }] })
  }

  render() {
    return (
      <Container>
        <WhiteBg>
          <Margin>
            <Button
              raised
              primary
              text="Add Task"
              onPress={this.addTask} />
          </Margin>
        </WhiteBg>
        {
          this.state.taskList[0] ?
          <View>
            {
              Object.keys(this.state.taskList).map((task) => {
                return (
                  <ListItem
                    key={this.state.taskList[task].id}
                    divider
                    leftElement={this.state.taskList[task].active ? <Icon name="check-box-outline-blank" /> : <Icon name="check-box" />}
                    onLeftElementPress={() => {
                      const newState = _.cloneDeep(this.state)
                      newState.taskList[task].active = !newState.taskList[task].active
                      this.setState(newState)
                    }}
                    centerElement={<MarginRight><Text>{this.state.taskList[task].name}</Text></MarginRight>}
                    onPress={() => console.log('show details...')} />
                )
              })
            }
          </View>
          :
          <View>
            <ListItem
              divider
              leftElement={<Icon name="import-contacts" />}
              centerElement={{
                primaryText: 'You have no tasks!',
              }} />
          </View>
        }
      </Container>
    )
  }
}
export default ScheduleOverview

const Container = styled.ScrollView`
  flex: 1;
`

const Margin = styled.View`
  margin: 15px 20px;
`

const MarginRight = styled.View`
  margin-right: 20px;
`

const WhiteBg = styled.View`
  background-color: white;
`
