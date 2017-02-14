FactoryGirl.define do
  factory :log do
    name FFaker::Lorem.phrase(5)
    time rand(1000)
    project nil
  end
end
