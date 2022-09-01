class CreateHabits < ActiveRecord::Migration[6.1]
  def change
    create_table :habits do |t|
      t.integer :user_id
      t.text :habit_description
      t.integer :number_days
      t.string :habit_priority
      t.text :action_plan
      t.text :obstacles
      t.text :backup_plan
      t.string :preparation_steps
      t.boolean :is_active

      t.timestamps
    end
  end
end
