class Habit < ApplicationRecord
    belongs_to :user
    has_many :dates_completeds

    validates :habit_description, presence: true
    validates :number_days, presence: true
    validates :habit_priority, presence: true
end
