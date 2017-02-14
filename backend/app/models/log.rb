class Log < ApplicationRecord
  belongs_to :project

  validates_presence_of :name, :time
end
