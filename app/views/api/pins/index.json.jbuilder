require 'byebug'
@pins.each do |pin|
  json.set! pin.id do
    json.partial! 'pin', pin: pin
    json.photoUrl url_for(pin.photo)
  end 
end 

