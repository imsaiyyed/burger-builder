import React, { Component } from 'react';
import Inputs from '../Components/Input/Inputs';
import { Button,Alert} from 'reactstrap';

class Login extends Component {

    state={
        logInForm:{
            email:{
            elementType:'input',
            elementConfig:{
              type:'email',
              placeholder:'Email'
            },
            value:''
    
          },
          password:{
            elementType:'input',
            elementConfig:{
                type:'password',
                placeholder:'Password'
            },
            value:''
          }
        },
        isInvalid:false
       
        }
    componentDidMount(){
        console.log(this.props);
    }
    formChanged=(event,inputIdentifier)=>
	{
		const formCopy={...this.state.logInForm}
		formCopy[inputIdentifier].value=event.target.value;

		this.setState({
			logInForm:formCopy
		});
		console.log(inputIdentifier);
    }
    logIn=()=>{
        if(this.state.logInForm.email.value==='ismail' && this.state.logInForm.password.value==='1234'){
            localStorage.setItem('user',this.state.logInForm.email.value);
            this.props.history.push('/burgerbuilder');
        }
        else{
          this.setState({
            isInvalid:true
          });
        }
    }
  render() {
    const formElements=[];
    for(let key in this.state.logInForm){
      formElements.push(
        {
          id:key,
          config:this.state.logInForm[key]
        }
      );
    }
    let source=null;
    source=(
        <form>
					{formElements.map(element=>(
						<div><Inputs
							elementType={element.config.elementType} 
							elementConfig={element.config.elementConfig} 
							value={element.config.value}
							key={element.id}
							changed={(event)=>{this.formChanged(event,element.id)}}/><br/></div>
					))}
        </form>
    );
    return (
      <div className="LogInForm">
        <h3>Log In</h3>
        {source}
        <Button color='primary' onClick={this.logIn}>Log In</Button>
        {this.state.isInvalid?<Alert color="danger">
        Please provide valid username and password
      </Alert>:null}
      </div>
    );
  }
}

export default Login;
