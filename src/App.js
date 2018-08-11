import React, { Component } from 'react';
import './App.css';
import { Card } from 'semantic-ui-react';
import { Container,Icon, Header,Form, Button, TextArea} from 'semantic-ui-react';


class App extends Component {
  constructor(props){
    super(props);
    this.state={value:"",arr:[]};
    this.handleInput=this.handleInput.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleClose=this.handleClose.bind(this);
  }
  handleInput(event){
    this.setState({value:event.target.value});

  }
  handleClose(n){
    console.log(n);
    var array = [...this.state.arr];
    
  console.log(array);
  array.splice(n,1);
  this.setState({arr:array});
    console.log(array);
  }
  handleSubmit(event){
    event.preventDefault();
    this.state.arr.push(this.state.value);

    this.setState({value:""});
    }
    createList(){
      var nlist=[]
    var n=1;
    for(var i=0;i<this.state.arr.length;i++){
      var s="List "+(n++);
     
        nlist.push(
          <Card >
          <Icon circular name='close' size='small' onClick={this.handleClose.bind(this, i)}/>
          <Card.Content header={s} />
          
          <Card.Content description={this.state.arr[i]} />

          </Card>
          );

    }
   
    return (<Card.Group centered>{nlist}</Card.Group>);
  }
  render() {
    return (
    <div>
      <Container textAlign='center'>
      <Header as='h2'>To Do List</Header>
       <Form onSubmit={this.handleSubmit}>
          <Form.Field>
          <label><TextArea onChange={this.handleInput} value={this.state.value}/></label>
          </Form.Field>
          <label><Button type="submit" value="Submit">Submit</Button></label>
        </Form>
        {this.createList()}
      
      </Container>
      </div>
    );
  }
}

export default App;
