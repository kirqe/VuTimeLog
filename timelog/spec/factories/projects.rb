FactoryGirl.define do
  factory :project do
    title FFaker::Lorem.phrase(5)
    rate rand(100)
  end
end
