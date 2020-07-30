
my_email = "acruz@gmail.com"
false_email = "acruzgmail.com"
falseemail = "acruz@gmailcom"

def check_email(email)
  (email.dup.split("@").length == 2) && (email.split(".").length == 2)
end 

puts check_email(my_email)
puts check_email(false_email)
puts check_email(falseemail)
puts my_email.dup.split("@")