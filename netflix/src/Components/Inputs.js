import React from 'react';
import Input from './Input';
import {Text, View, TextInput, Dimensions} from 'react-native';

const Inputs = (props) => { //mapping
  return (props.inputs.map(input => {
      <Input/>
  } )

  );
};
class Todos extends Component {
    render() {
      return (this.props.todos.map((todo) =>
      <TodoItem key ={todo.id} todoItem={todo} markComplete ={this.props.markComplete} delTodo = {this.props.delTodo} />)); 
    }
  }