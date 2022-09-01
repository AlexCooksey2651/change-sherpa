class Goal < ApplicationRecord
    belongs_to :user
    has_many :progress_updates

    validates :goal_description, presence: true
    validates :goal_priority, presence: true
end
