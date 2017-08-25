import React, {Component} from 'react'
import {Form, Button} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { withRouter } from 'react-router'
import moment from 'moment'


class FlightStatus extends Component {
  constructor(props) {
    super(props)
    this.today = moment().local(),
    this.todayISO = this.today.clone().toISOString(),
    this.state = {
      flight_date: this.todayISO,
      flight_number: ''
    }
  }




  handleClick = event => {
    //this.props.fetchFlights(this.state)
    this.props.history.push('/flights')
  }

   handleChange = (e, {name, value}) => {
    this.setState({[name]: value  })
   }

  render(){
    const tomorrow = this.today.clone().add('1', 'days')
    const yesterday = this.today.clone().subtract('1', 'days')
    const options = [

      {key: 1, text: `Today, ${this.today.clone().format("MMM Do YYYY")}`, value: this.todayISO},
      {key: 2, text: `Tomorrow, ${tomorrow.clone().format("MMM Do YYYY")}`, value: tomorrow.clone().toISOString()},
      {key: 3, text: `Yeseterday, ${yesterday.clone().format("MMM Do YYYY")}`, value: yesterday.clone().toISOString()}
    ]
    return(
      <Form autoComplete="on" size='large' >
      <Form.Select  label='Flight Date' name='flight_date' options={options} onChange={this.handleChange} value={this.state.flight_date}   />
      <Form.Input focus fluid size='large' onChange={this.handleChange} name='flight_number' placeholder='Flight Number' />
      <Button color='green' onClick={this.handleClick} fluid size='large'>VIEW STATUS</Button>
      </Form>
    )
  }
}

//const mapDispatchToProps = dispatch => (
//)



export default withRouter(connect(null, null)(FlightStatus))
