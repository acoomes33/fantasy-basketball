# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# Faker::Sports::Basketball.team #=> "Golden State Warriors"

# Faker::Sports::Basketball.player #=> "LeBron James"

# Faker::Sports::Basketball.coach #=> "Gregg Popovich"

# Faker::Sports::Basketball.position #=> "Point Guard"

10.times do 
    Player.create(name: Faker::Sports::Basketball.player, team: Faker::Sports::Basketball.team, number: rand() * 100)
end