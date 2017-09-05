import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import fetchFlights from '../actions/fetchFlights'
import {connect} from 'react-redux'
import {  Menu, Grid, Segment } from 'semantic-ui-react'
import img from "../beach.jpg"
import BookAFlight from './bookAFlight'
import MyTrips from './myTrips'
import FlightStatus from './flightStatus'
import FlightStatusTable from '../components/flightStatusTable'


 class FlightsInput extends Component {

   constructor(props){
     super(props)
     this.state = {
       activeItem: 'bookAFlight',
     }
   }



handleItemClick = (event, data) => {
  this.setState({activeItem: data.name}
)}






  render() {
    let widgetComponent = <div />
    if (this.state.activeItem === 'bookAFlight') {
      widgetComponent = <BookAFlight />
    }
    else if (this.state.activeItem === 'myTrips') {
      widgetComponent = <MyTrips />
    }
    else {
      widgetComponent = <FlightStatus />

    }
    return (
      <div  id='flightInput' style={{backgroundImage: "url(" + img  + ")", minHeight: '100%', backgroundSize: 'cover', position: 'relative'}} >
          <Grid
           textAlign='center'
            style={{height: '100%'}}
            //verticalAlign='middle'
            >
            <Grid.Column style={{maxWidth: 450}}>
            {true && <div>
               <Menu pointing attached='top' widths={3}>
                <Menu.Item name='bookAFlight'onClick={this.handleItemClick}  active={this.state.activeItem === 'bookAFlight'} > Book a Flight </Menu.Item>
                <Menu.Item name='myTrips' active={this.state.activeItem === 'myTrips'} onClick={this.handleItemClick}>My Trips </Menu.Item>
                <Menu.Item name='flightStatus' onClick={this.handleItemClick} active={this.state.activeItem === 'flightStatus'} >Flight Status</Menu.Item>
              </Menu>

              <Segment stacked attached='bottom'>
                {widgetComponent}
              </Segment>
            </div>}

            {this.props.toggleStatusTable && <FlightStatusTable />}
            {console.log(this.props)}
            </Grid.Column>
          </Grid>
      </div>

    )
  }
}

const mapDispatchToProps = (dispatch) =>{
  return bindActionCreators({fetchFlights: fetchFlights}, dispatch)
}

const mapStateToProps = state => { 
  return(
  {toggleStatusTable: state.flightStatus.toggleStatusTable}
)}

export default connect(mapStateToProps, mapDispatchToProps)(FlightsInput)
