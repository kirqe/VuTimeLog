class Project < ApplicationRecord
  has_many :logs, dependent: :destroy
  belongs_to :user
  default_scope { order(created_at: :desc) }
  validates_presence_of :title
  validates_numericality_of :rate
  
  scope :with_logs, -> { includes(:logs) }
  scope :earned, -> { logs.map(&:time).reduce(:+) * rate }
end
