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
        <div className='checkOuter'>
        <div className='checkoutDiv'>
       

    <Row>
      <Col >
        <Card style={{color:'#11646e'}} body>
          <CardTitle >Order details</CardTitle>
          {this.props.ingredients.cheese>0?<CardText>Cheese (8*{this.props.ingredients.cheese}): {cheesePrice}</CardText>:null}
          {this.props.ingredients.bacon>0?<CardText>Bacon (5*{this.props.ingredients.bacon}): {baconPrice}</CardText>:null}
          {this.props.ingredients.meat>0?<CardText>Meat (15*{this.props.ingredients.meat}): {meatPrice}</CardText>:null}
          {this.props.ingredients.salad>0?<CardText>Salad (10*{this.props.ingredients.salad}): {saladPrice}</CardText>:null}
          <CardText>Base Price: {30}</CardText>
          <CardText style={{fontWeight:'bold',color:'#990500'}}>Total Price: {this.props.totalPrice}</CardText>

          <Button color='success' onClick={this.props.place}>Confirm order</Button>
        </Card>
      </Col>
      
    </Row>

    {this.props.placed?<Alert color="success">
        Your order is placed successfully
      </Alert>:null}
        </div>
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
