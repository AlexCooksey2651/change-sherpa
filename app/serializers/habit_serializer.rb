class HabitSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :habit_description, :action_plan, :obstacles, :backup_plan, :preparation_steps, :priority
end
