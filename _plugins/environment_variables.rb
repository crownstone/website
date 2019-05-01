module Jekyll
	class EnvironmentVariablesGenerator < Generator
		# Check also: https://stackoverflow.com/questions/11410611/get-jekyll-configuration-inside-plugin
		def generate(site)
			site.config['env'] = ENV['JEKYLL_ENV'] || 'development'
				
			if ENV['GOOGLE_ANALYTICS_KEY'] 
				site.config['JB']['analytics']['google']['tracking_id'] = ENV['GOOGLE_ANALYTICS_KEY'] 
			end
		end

	end

end
