import React                                           from 'react'
import { ScrollView, View, Text }                      from 'react-native'
import styled                                          from 'styled-components/native'
import _                                               from 'lodash'
import { Icon, Dialog, DialogDefaultActions, Toolbar } from 'react-native-material-ui'

import Button   from '../components/button.js'
import ListItem from '../components/list-item.js'

export default class ScheduleOverview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      taskList: [],
      showModal: false
    }
  }

  addTask = () => {
    // this.setState({ showModal: true })
    this.setState({ taskList: [...this.state.taskList, { id: this.state.taskList.length++, name: 'Task_1', active: true }] })
  }

  render() {
    return (
      <Flex>
        <Toolbar
          centerElement='Task List'
          leftElement='menu'
          onLeftElementPress={()=>{this.props.navigation.navigate('DrawerToggle')}}
        />
        <Container>
          {/* {
            this.state.showModal ?
            <Dialog>
              <Dialog.Title><Text>Add New Task</Text></Dialog.Title>
              <Dialog.Content>
                <Text>
                  Enter your task name, details (optional), and category...
                </Text>
              </Dialog.Content>
              <Dialog.Actions>
                <DialogDefaultActions
                  actions={['Cancel', 'Save']}
                  onActionPress={(action) => { console.log(action) }} />
              </Dialog.Actions>
            </Dialog>
            :
            <View/>
          } */}
          <Margin>
            <Button
              primary
              icon="add-to-photos"
              text="Add Task"
              onPress={this.addTask} />
          </Margin>
          {
            this.state.taskList[0] ?
            <View>
              {
                Object.keys(this.state.taskList).map((task) => {
                  return (
                    <ListItem
                      key={this.state.taskList[task].id}
                      leftElement={this.state.taskList[task].active ? <Icon name="check-box-outline-blank" /> : <Icon color='#455a64' name="check-box" />}
                      onLeftElementPress={() => {
                        const newState = _.cloneDeep(this.state)
                        newState.taskList[task].active = !newState.taskList[task].active
                        this.setState(newState)
                      }}
                      centerElement={{primaryText:this.state.taskList[task].name}}
                      onPress={() => console.log('show details...')} />
                  )
                })
              }
            </View>
            :
            <View>
              <ListItem
                centerElement={{primaryText:'Your Task Log is empty...'}} />
            </View>
          }
        </Container>
      </Flex>
    )
  }
}

const Flex = styled.View`
  flex: 1;
`

const Container = styled.ScrollView`
  background-color: #303030;
  flex: 1;
`

const Margin = styled.View`
  margin: 25px 20px;
`

const MarginRight = styled.View`
  margin-right: 20px;
`
