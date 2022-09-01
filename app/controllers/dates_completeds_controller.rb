class DatesCompletedsController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :invalid_record
end
