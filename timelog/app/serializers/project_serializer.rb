class ProjectSerializer < ActiveModel::Serializer
  attributes :project
  has_many :logs

  def project
    {
      id: object.id,
      title: object.title,
      rate: object.rate,
      created_at: object.created_at.strftime('%m/%d/%Y')
    }
  end

end
