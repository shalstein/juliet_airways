class Flight < ApplicationRecord

  def self.format_time(time)
    #binding.pry
    time.strftime("%I:%M %p")
  end

  def self.format_date(date)
    date.strftime("%A, %B %d, %Y")
  end





end
