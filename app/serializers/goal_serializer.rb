class GoalSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :goal_description, :deadline, :completed, :why, :behaviors, :challenges, :resources, :goal_priority
end
