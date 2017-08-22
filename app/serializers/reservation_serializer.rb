class ReservationSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :middle_name, :departure_date, :payment_info#, instance_options[:payment_info]


  def payment_info
    instance_options[:payment_info]
  end

  def departure_date
    Reservation.format_date(object.departure_date)
  end

  belongs_to :flight
end
