class CreateGoals < ActiveRecord::Migration[6.1]
  def change
    create_table :goals do |t|
      t.integer :user_id
      t.text :goal_description
      t.date :deadline
      t.string :category
      t.string :goal_priority
      t.text :why
      t.text :measure
      t.text :behaviors
      t.text :challenges
      t.text :resources
      t.boolean :completed
      
      t.timestamps
    end
  end
end
