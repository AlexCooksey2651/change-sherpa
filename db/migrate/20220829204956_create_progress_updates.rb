class CreateProgressUpdates < ActiveRecord::Migration[6.1]
  def change
    create_table :progress_updates do |t|
      t.string :goal_id
      t.date :date
      t.string :progress
      t.string :measurement

      t.timestamps
    end
  end
end
