class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :habits, :goals

  has_many :habits
  has_many :goals
  
end
