class ProgressUpdate < ApplicationRecord
    belongs_to :goal

    validates :date, presence: true
    validates :progress, presence: true
end
