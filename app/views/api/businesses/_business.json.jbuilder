json.extract! business, :id, :name, :address, :longitude, :latitude

json.reviews reviews do |review|

  json.set! review.id do
    json.extract! review, :id, :body, :rating
    json.user_id review.user.id
  end

end

json.users reviews do |review|

  json.set! review.user.id do
    json.f_name review.user.f_name
    json.l_name review.user.l_name
  end

end