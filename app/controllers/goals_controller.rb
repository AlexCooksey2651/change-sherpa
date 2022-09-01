class GoalsController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :invalid_record

    before_action :authorize

    private 

    def authorize
        return render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :user_id
    end

    def goal_params
        params.permit(:user_id, :goal_description, :deadline, :category, :goal_priority, :why, :measure, :challenges, :resources)
    end

    def invalid_record(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
