class ProgressUpdatesController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :invalid_record   
end
