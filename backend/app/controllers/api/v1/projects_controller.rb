module Api::V1
  class ProjectsController < ApiController
    before_action :set_project, only: [:show, :update, :destroy]

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
      @project = Project.new(project_params)
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

    private

    def set_project
      @project = Project.find(params[:id])
    end

    def project_params
      params.require(:project).permit(:title, :rate)
    end
  end
end
