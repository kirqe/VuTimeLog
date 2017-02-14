class Log < ApplicationRecord
  belongs_to :project
  default_scope { order(created_at: :desc) }
  validates_presence_of :name, :time

  scope :by_date, -> { order('crated_at DESC')   }
end
