import React from 'react'
import Flight from './flight'
import {connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Grid , Segment, Row, Container, Button, Menu} from 'semantic-ui-react'

const InlineStyle = () => (
<style>{`
  #price:hover {
    background-color: blue;
    color: #fff;
  }
  #price:hover .hiddenText {
    visibility: visible;
    font-weight: bold
  }
  .hiddenText {
    visibility: hidden
  }
  `}</style>
)

const flightsList = (props) => {
  const flights = 'hi'
  //const flights = props.flights.flights.map((flight, index) => <Flight key={index} flight={flight} /> )
  //const flights = [{flight_number: 510, departure_city: "JFK", arival_city: "LAX", departure_date_time: '2018-03-22 11:18:00', arival_date_time: '2018-03-22 14:19:00', price: 350},{flight_number: 111, departure_city: "JFK", arival_city: "FLL", departure_date_time: '2018-03-22 08:30:00', arival_date_time: '2018-03-22 10:50:00', price: 200 }].map((flight, index) => <Flight key={index} flight={flight} /> )
  return (
    <div id='flights-list'>
    <InlineStyle />

      <Container  style={{fontSize: '18px', lineHeight: '200%'}}>
      <NavLink to='/'><Button  style={{  marginLeft: '74.1%'}}   >Search Again</Button></NavLink>
        <Grid  celled style={{maxWidth: '70%', margin: 'auto'}} >
        <Grid.Row > {props.flights.departure_city} > {props.flights.arival_city} <br /> {props.flights.departure_date}</Grid.Row>
        {flights}
        </Grid>
      </Container>

    </div> )
}

const mapStateToProps = state => {
  return {flights: state.flights}
}



export default connect(mapStateToProps)(flightsList)
