class ProgressUpdateSerializer < ActiveModel::Serializer
  attributes :id, :goal_id, :date, :progress, :measurement
end
