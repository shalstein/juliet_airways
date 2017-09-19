const reservations = (state={isFetching: false, reservation: { flight: {flight_number: ''}, payment_info: {}}, traveler_info: {}, reservations: {reservations: []}}, action) => {
  switch (action.type) {
    case 'ADD_TRAVELERS_DETAILS':
      return Object.assign({}, state, {traveler_info: action.payload})
      case 'FETCHING_RESERVATION':
        return Object.assign({}, state, {isFetching: 'true'})
      case 'RECIEVE_RESERVATION':
        return Object.assign({}, state, {isFetching: 'false'}, action.payload)
      case 'CLEAR_RESERVATION':
        return Object.assign({}, {isFetching: false, reservation: { flight: {flight_number: ''}, payment_info: {}}, traveler_info: {}} )
      case 'GET_RESERVATIONS':
        return Object.assign({}, state, {reservations: action.payload})
    default:
      return state
  }
}

export default reservations
