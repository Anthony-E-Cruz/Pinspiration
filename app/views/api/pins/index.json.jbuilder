@pins.each do |pin|
  json.set! pin.id do
    # debugger
    json.partial! 'pin', pin: pin
    # debugger
    # json.photoUrl url_for(pin.photo)
    # debugger
  end 
end 

