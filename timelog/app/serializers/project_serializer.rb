class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :title, :rate, :created_at
  has_many :logs

  def created_at
    object.created_at.strftime('%m/%d/%Y')
  end
end
