class CreateDatesCompleteds < ActiveRecord::Migration[6.1]
  def change
    create_table :dates_completeds do |t|
      t.integer :habit_id
      t.date :date
      t.string :weekday

      t.timestamps
    end
  end
end
