module Api::V1
  class LogsController < ApiController
    before_action :set_log_and_project, only: [:destroy]

    def create
      # project = Project.find(params[:project_id])
      # @log = project.logs.new(log_params)
      @log = Log.new(log_params)
      if @log.save
        render json: @log, status: :created
      else
        render json: @log.errors, status: :unprocessable_entity
      end
    end

    def destroy
      @log.destroy
      head :no_content
    end

    private

    def set_log_and_project
      @log = Log.find(params[:id])
    end

    def log_params
      params.require(:log).permit(:name, :time, :project_id)
    end
  end
end
