class Project < ApplicationRecord
  has_many :logs, dependent: :destroy

  validates_presence_of :title
end
