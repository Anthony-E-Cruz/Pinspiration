json.extract! user, :id, :email, :username, :age, :first_name, :last_name, :about_you, :location
json.photoUrl url_for(user.photo)