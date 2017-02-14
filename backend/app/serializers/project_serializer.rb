class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :title, :rate, :created_at, :logs_count, :earned
  has_many :logs

  def logs_count
    object.logs.length
  end

  def earned
    seconds = object.logs.map(&:time).reduce(:+)
    (seconds.to_f / 3600 * object.rate).round(2)
  end

  def created_at
    object.created_at.strftime('%m/%d/%Y')
  end
end
