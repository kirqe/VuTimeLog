class CreateLogs < ActiveRecord::Migration[5.0]
  def change
    create_table :logs do |t|
      t.string :name
      t.integer :time
      t.references :project, foreign_key: true

      t.timestamps
    end
  end
end
