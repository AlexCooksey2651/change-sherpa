class HabitSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :habit_description, :number_days, :habit_priority, :action_plan, :obstacles, :backup_plan, :preparation_steps, :is_active
end
