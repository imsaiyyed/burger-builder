import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Card, Button, CardTitle, CardText, Row,Alert, Col } from 'reactstrap';


class BurgerBuilder extends Component {

    componentWillMount(){
        if(localStorage.getItem('user')){

        }
        else{
            this.props.history.push('/login');
        }
    }
    
    render() {
        let saladPrice=0;
        for(let i=0;i<this.props.ingredients.salad;i++){
            saladPrice+=10;
        }
        let baconPrice=0;
        for(let i=0;i<this.props.ingredients.bacon;i++){
            baconPrice+=5;
        }
        let meatPrice=0;
        for(let i=0;i<this.props.ingredients.meat;i++){
            meatPrice+=15;
        }
        let cheesePrice=0;
        for(let i=0;i<this.props.ingredients.cheese;i++){
            cheesePrice+=8;
        }
    return (
        <div className='checkoutDiv'>
       

    <Row>
      <Col >
        <Card body>
          <CardTitle>Order details</CardTitle>
          <CardText>Cheese: {cheesePrice}</CardText>
          <CardText>Bacon: {baconPrice}</CardText>
          <CardText>Meat: {meatPrice}</CardText>
          <CardText>Salad: {saladPrice}</CardText>
          <CardText>Base Price: {30}</CardText>
          <CardText>Total Price: {this.props.totalPrice}</CardText>

          <Button onClick={this.props.place}>Confirm order</Button>
        </Card>
      </Col>
      
    </Row>

    {this.props.placed?<Alert color="success">
        Your order is placed successfully
      </Alert>:null}
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
        ingredients:state.burger.ingredients,
        totalPrice:state.price.totalPrice,
        placed:state.price.placed
    };
  }
  const mapDispatchToProps=dispatch=>{
    return {
      
      place:()=>dispatch({
        type:'PLACE',
      })
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(BurgerBuilder);
