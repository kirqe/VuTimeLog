class User < ApplicationRecord
  has_secure_password
  validates_presence_of :name
  validates_uniqueness_of :email
  validates_presence_of :password
  has_many :projects, dependent: :destroy
end
