# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


10.times do |u|
  User.create(name: FFaker::Name.first_name,
              email: "test#{u}@test.com",
              password: 'test')
end

30.times {
  Project.create(title: FFaker::Lorem.phrase(5), rate: rand(100), user_id: rand(10))
}

100.times {
  Log.create(name: FFaker::Lorem.phrase(5), time: rand(1000), project_id: rand(30))
}
