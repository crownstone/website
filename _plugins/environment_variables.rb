module Jekyll
	class EnvironmentVariablesGenerator < Generator
		# Check also: https://stackoverflow.com/questions/11410611/get-jekyll-configuration-inside-plugin
		def generate(site)
			site.config['env'] = ENV['JEKYLL_ENV'] || 'development'

			if site.config['JB']['analytics']['google'] 
				site.config['JB']['analytics']['google']['tracking_id'] = ENV['GOOGLE_ANALYTICS_KEY'] || 'ga-unknown'
			end
		end

	end

end
