class ProgressUpdatesController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :invalid_record
    
    def create
        goal = Goal.find_by(id: params[:goal_id])
        if goal
            new_progress_update = habits.progress_updates.create!(progress_update_params)
            render json: new_progress_update, status: :created
        else
            render json: {error: "Goal record not found"}, status: :not_found
        end
    end

    def destroy
        progress_update = ProgressUpdate.find_by(id: params[:id])
        if progress_update
            progress_update.destroy
            head :no_content
        else
            render json: {error: "Record not found"}, status: :not_found
        end
    end

    private

    def authorize
        return render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :user_id
    end

    def progress_update_params
        params.permit(:goal_id, :date, :progress, :measurement)
    end

    def invalid_record(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
