class DatesCompletedSerializer < ActiveModel::Serializer
  attributes :id, :habit_id, :date, :weekday
end
