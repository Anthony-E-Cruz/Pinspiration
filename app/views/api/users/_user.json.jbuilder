json.extract! user, :id, :email, :username, :age, :first_name, :last_name, 
                    :about_you, :location, :boards, :pins
# json.photoUrl url_for(:pins.photo)

json.set! user.id do 
  user.pins.each do |pin|
    json.set! pin.id do
      json.photoUrl url_for(pin.photo)
    end 
  end 
end

