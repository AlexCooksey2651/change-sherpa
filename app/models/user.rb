class User < ApplicationRecord
    has_secure_password
    has_many :habits, dependent: :destroy
    has_many :goals, dependent: :destroy

    validates :name, presence: true
    validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :password, length: { in: 6..20 }
end
