class ProjectReport < Prawn::Document
  def initialize(project)
    super()

    @project = project
    header
    logs_list
  end

  def header
    text "Project: #{@project.title} \n Created: #{@project.created_at.strftime('%d.%m.%Y')} \n Earned: #{earned(@project)} \n Time: #{time(@project.logs.map(&:time).reduce(:+))}", size: 18, style: :bold
  end

  def logs_list
    move_down 20
    [["Task", "time", "$"]] +
    @project.logs.each.with_index(1) do |log, idx|
      text "#{idx}. #{log.name}, $#{(log.time.to_f / 3600 * @project.rate).round(2)}, #{time(log.time)} "
      move_down 2
    end
  end

  private
    def earned(project)
      seconds = project.logs.map(&:time).reduce(:+)
      (seconds.to_f / 3600 * project.rate).round(2)
    end

    def time(seconds)
      Time.at(seconds).utc.strftime("%H:%M:%S")
    end
end
