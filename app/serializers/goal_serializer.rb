class GoalSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :goal_description, :deadline, :category, :goal_priority, :why, :measure, :behaviors, :challenges, :resources, :completed
end
