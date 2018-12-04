import React, { Component } from 'react';
import {connect} from 'react-redux';
import Salad from '../Components/Ingredients/Salad';
import Bacon from '../Components/Ingredients/Bacon';
import Meat from '../Components/Ingredients/Meat';
import Cheese from '../Components/Ingredients/Cheese';
import { Container, Row, Col ,Button,Label,Badge} from 'reactstrap';

// import {withRouter} from 'react-router-dom';
class BurgerBuilder extends Component {

    componentWillMount(){
        if(localStorage.getItem('user')){

        }
        else{
            this.props.history.push('/login');
        }
    }
    removeLayer=(event)=>{
        let newIng={...this.props.ingredients};
        
        switch(event.target.name){
            case 'salad':
                if(newIng.salad>0){
                    newIng.salad--;
                    this.props.change(newIng);
                    this.props.changePrice(-10);

                }
            break;
            case 'meat':
                if(newIng.meat>0){
                    newIng.meat--;
                    this.props.change(newIng);
                    this.props.changePrice(-15);

                }
            break;
            case 'cheese':
                if(newIng.cheese>0){
                    newIng.cheese--;
                    this.props.change(newIng);
                    this.props.changePrice(-8);

                }
            break;
            case 'bacon':
                if(newIng.bacon>0){
                    newIng.bacon--;
                    this.props.change(newIng);
                    this.props.changePrice(-5);

                }
            break;
            default:
            break;
        }
    }
    addLayer=(event)=>{
        let newIng={...this.props.ingredients};
        switch(event.target.name){
            case 'salad':
                if(newIng.salad<3)
                {  
                    newIng.salad++;
                    this.props.changePrice(10);
                }
                this.props.change(newIng);
            break;
            case 'meat':
                if(newIng.meat<3)
                {
                    newIng.meat++;
                    this.props.changePrice(15);

                }
                this.props.change(newIng);
            break;
            case 'cheese':
                
                if(newIng.cheese<3)
                {
                    newIng.cheese++;
                    this.props.changePrice(8);

                }
                    this.props.change(newIng);
            break;
            case 'bacon':
                if(newIng.bacon<3)
                {
                    newIng.bacon++;
                    this.props.changePrice(5);

                }
                this.props.change(newIng);
            break;
            default:
            break;
        }
    }
    checkout=()=>{
        this.props.history.push('/checkout');
    }
    render() {
        let salads=[];
        for(let i=0;i<this.props.ingredients.salad;i++){
            salads.push(<Salad key={i}/>);
        }
        let bacons=[];
        for(let i=0;i<this.props.ingredients.bacon;i++){
            bacons.push(<Bacon key={i}/>);
        }
        let meats=[];
        for(let i=0;i<this.props.ingredients.meat;i++){
            meats.push(<Meat key={i}/>);
        }
        let cheese=[];
        for(let i=0;i<this.props.ingredients.cheese;i++){
            cheese.push(<Cheese key={i}/>);
        }
    return (
        <div>
            <img src={ require('../assests/top-bun.png') } />
            <div className="ingedients">{salads}{bacons}{cheese}{meats}</div>
            <img src={ require('../assests/bottom-bun.png') } />

        <div><h4>Totla Price:{this.props.totalPrice} Rs.</h4></div>
        
        
        <div className='Customization'>
            <div className="innerCustom">
            
            <Row>
                <Col xs="6" sm="4"><h3><Badge color="info">Salad</Badge></h3></Col>
                <Col xs="6" sm="4"><Button className='addBtn' color='success' name='salad' onClick={this.addLayer}>Add</Button ></Col>
                <Col sm="4"><Button color='danger' onClick={this.removeLayer} name='salad'>Remove</Button></Col>
            </Row><br/>
            <Row>
                <Col xs="6" sm="4"><h3><Badge color="info">Bacon</Badge></h3></Col>
                <Col xs="6" sm="4"><Button className='addBtn' color='success' name='bacon' onClick={this.addLayer}>Add</Button ></Col>
                <Col sm="4"><Button color='danger' onClick={this.removeLayer} name='bacon'>Remove</Button></Col>
            </Row> <br/>
            <Row>
                <Col xs="6" sm="4"><h3><Badge color="info">Cheese</Badge></h3></Col>
                <Col xs="6" sm="4"><Button className='addBtn' color='success' name='cheese' onClick={this.addLayer}>Add</Button ></Col>
                <Col sm="4"><Button color='danger' onClick={this.removeLayer} name='cheese'>Remove</Button></Col>
            </Row> <br/>
            <Row>
                <Col xs="6" sm="4"><h3><Badge color="info">Meat</Badge></h3></Col>
                <Col xs="6" sm="4"><Button  className='addBtn' color='success' name='meat' onClick={this.addLayer}>Add</Button ></Col>
                <Col sm="4"><Button  color='danger' onClick={this.removeLayer} name='meat'>Remove</Button></Col>
            </Row> <br/>
            <Button style={{float:'right'}}color="info" onClick={this.checkout}>Checkout</Button>


            </div>
        </div>
        
        
        {/* <div className='Customization'>
        <div className="innerCustom">
            <h3><Badge color="info">Salad</Badge></h3>{'\t' }<Button name='salad' onClick={this.addLayer}>+</Button >{'    '}<Button onClick={this.removeLayer} name='salad'>-</Button><br/>
            <h3><Badge color="info">Bacon</Badge></h3>{' '}<Button name='bacon' onClick={this.addLayer}>+</Button>{' '}<Button onClick={this.removeLayer} name='bacon'>-</Button><br/>
            <h3><Badge color="info">Cheese</Badge></h3>{' '}<Button name='cheese' onClick={this.addLayer}>+</Button>{' '}<Button onClick={this.removeLayer} name='cheese'>-</Button><br/>
            <h3><Badge color="info">Meat</Badge></h3>{' '}<Button name='meat' onClick={this.addLayer}>+</Button>{' '}<Button onClick={this.removeLayer} name='meat'>-</Button><br/>
            <Button color="info" onClick={this.checkout}>Checkout</Button>
        </div>
        </div> */}

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
        totalPrice:state.price.totalPrice
    };
  }
const mapDispatchToProps=dispatch=>{
    return {
        change:(ingredients)=>dispatch({
        type:'UPDATE',
        ingredients:ingredients
      }),
      changePrice:(value)=>dispatch({
        type:'UPDATEPRICE',
        price:value
      })
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(BurgerBuilder);
