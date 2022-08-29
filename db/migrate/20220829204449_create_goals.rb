class CreateGoals < ActiveRecord::Migration[6.1]
  def change
    create_table :goals do |t|
      t.integer :user_id
      t.text :goal_description
      t.date :deadline
      t.boolean :completed
      t.text :why
      t.text :behaviors
      t.text :challenges
      t.text :resources
      t.string :goal_priority

      t.timestamps
    end
  end
end
