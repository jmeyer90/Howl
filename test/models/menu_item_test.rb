# == Schema Information
#
# Table name: menu_items
#
#  id          :bigint           not null, primary key
#  menu_id     :integer          not null
#  title       :string           not null
#  price       :integer          not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class MenuItemTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
