module Api::V1
  class ProjectsController < ApiController
    before_action :set_project, only: [:show, :update, :destroy, :export]

    def index
      render json: @current_user.projects.with_logs
    end

    def show
      if @current_user.projects.include?(@project)
        render json: @project
      else
        render json: @project.errors, status: :unprocessable_entity
      end
    end

    def create
      @project = @current_user.projects.build(project_params)
      if @project.save
        render json: @project, status: :created
      else
        render json: @project.errors, status: :unprocessable_entity
      end
    end

    def update
      if @project.update(project_params)
        render json: @project
      else
        render json: @project.errors, status: :unprocessable_entity
      end
    end

    def destroy
      @project.destroy
    end

    def export
      pdf = ProjectReport.new(@project)
      send_data pdf.render, filename: 'project_report.pdf', type: 'application/pdf'
    end

    private

    def set_project
      @project = @current_user.projects.find(params[:id])
    end

    def project_params
      params.require(:project).permit(:title, :rate, :user_id)
    end
  end
end
