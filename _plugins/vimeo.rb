class Vimeo < Liquid::Tag
	Syntax = /^\s*([^\s]+)(\s+(\d+)\s+(\d+)\s*)?/

	def initialize(tagName, markup, tokens)
		super

		if markup =~ Syntax then
			@id = $1
		else
			raise "No Vimeo ID provided in the \"vimeo\" tag"
		end

		array = markup.scan(/(?:"")|(?:"(.*[^\\])")|(\w+)/).flatten.compact
		@title = array[1]
		# puts "Title is #{@title}"

		if @title.nil? then
			@title = ''
		end

		@width = array[2]
		if $width.nil? then
			@width = 560
		end

		@height = array[3]
		if $height.nil? then
			@height = 420
		end
	end

	def render(context)
		"<div class=\"videowrapper\">
		<center>
		<iframe frameborder=\"0\" width=\"#{@width}\" height=\"#{@height}\" src=\"//player.vimeo.com/video/#{@id}?color=white&theme=light\"></iframe>
		</center>
		</div>"
	end

	Liquid::Template.register_tag "vimeo", self
end
