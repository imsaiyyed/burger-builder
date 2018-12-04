import React, { Component } from 'react';
import {connect} from 'react-redux';
import Builder from '../Components/Builder';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,Button,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
class BurgerBuilder extends Component {

    componentWillMount(){
        if(localStorage.getItem('user')){

        }
        else{
            this.props.history.push('/login');
        }
    }
    logout=()=>{
        localStorage.removeItem('user');
        this.props.history.push('/login');
    }
    render() {
    return (
        <div>
            <div className='navBar'>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href='/'>Burger Builder</NavbarBrand>
          <Nav className="ml-auto" navbar>
              <NavItem>
                <Button onClick={this.logout}>Logout</Button>
              </NavItem>
              </Nav>         
        </Navbar>
      </div>
            <Builder {...this.props}/>
        </div>

    );
  } 
}

// const mapStateToProps=state=>{
//     return {
//     msg:state.name
//     };
//   }
  const mapStateToProps=state=>{
    return {
        msg:state.burger.name
    };
  }
const mapDispatchToProps=dispatch=>{
    return {
        change:()=>dispatch({
        type:'TEST',
      })
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(BurgerBuilder);
