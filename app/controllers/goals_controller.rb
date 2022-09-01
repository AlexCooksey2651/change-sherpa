class GoalsController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :invalid_record

    before_action :authorize
    
    def create
        user = User.find_by(id: session[:user_id])
        new_goal = user.goals.create!(habit_params)
        new_goal.completed = false
        render json: new_goal, status: :created
    end

    def destroy
        goal = Goal.find_by(id: params[:id])
        if goal
            goal.destroy
            head :no_content
        else
            render json: {error: "Goal record not found"}, status: :not_found
        end
    end

    def update
        goal = Goal.find_by(id: params[:id])
        if goal
            goal.update!(goal_params)
            render json: goal, status: :ok
        else
            render json: {error: "Goal record not found"}, status: :not_found
        end
    end

    def mark_complete
        goal = Goal.find_by(id: params[:id])
        if goal
            goal.update!(completed: true)
            render json: goal, status: :ok
        else
            render json: {error: "Goal record not found"}, status: :not_found
        end
    end
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
