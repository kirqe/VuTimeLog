class Project < ApplicationRecord
  has_many :logs, dependent: :destroy
  default_scope { order(created_at: :desc) }
  validates_presence_of :title

  scope :with_logs, -> { includes(:logs) }
  scope :earned, -> { logs.map(&:time).reduce(:+) * rate }
end
