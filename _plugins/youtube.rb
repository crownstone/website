class YouTube < Liquid::Tag
	Syntax = /^\s*([^\s]+)(\s+(\d+)\s+(\d+)\s*)?/

	def initialize(tagName, markup, tokens)
		super

		if markup =~ Syntax then
			@id = $1
		else
			raise "No YouTube ID provided in the \"youtube\" tag"
		end

		array = markup.scan(/(?:"")|(?:"(.*[^\\])")|(\w+)/).flatten.compact
		
		@title = array[1]
		@width = array[2]
		@height = array[3]
		@wrap = array[4]

		if @title.nil? then
			@title = ''
		end

		if @width.nil? || @width.empty? then
			@width = 560
		end

		if @height.nil? || @height.empty? then
			@height = 420
		end
		
		if @wrap.nil? || @wrap.empty? then
			@wrap = 'videowrapper'
		end
		
		# Will only be reconsidered on restarting
		#puts "Title is #{@title}"
		#puts "Dimensions are #{@width} x #{@height}"
		#puts "Wrapping div is #{@wrap}"
		
	end

	def render(context)
		"<div class=\"#{@wrap}\">
		<center>
		<iframe frameborder=\"0\" width=\"#{@width}\" height=\"#{@height}\" allowfullscreen src=\"//www.youtube.com/embed/#{@id}?color=white&theme=light&title=#{@title}\"></iframe>
		</center>
		</div>"
	end

	Liquid::Template.register_tag "youtube", self
end
