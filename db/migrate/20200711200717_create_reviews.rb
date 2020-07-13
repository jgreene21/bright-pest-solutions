class CreateReviews < ActiveRecord::Migration[6.0]
  def change
    create_table :reviews do |t|
      t.string :stars
      t.string :title
      t.text :body
      t.string :author

      t.timestamps
    end
  end
end
