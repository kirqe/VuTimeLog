class LogSerializer < ActiveModel::Serializer
  attributes :id, :project_id, :name, :time
end
