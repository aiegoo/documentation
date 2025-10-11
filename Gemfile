source 'https://rubygems.org'

ruby '>= 3.0'

gem 'jekyll', '~> 4.3.3'
gem 'webrick', '~> 1.8'
gem 'csv'
gem 'base64'
gem 'kramdown-parser-gfm'
gem 'faraday-retry' # silences the Faraday retry warning

group :jekyll_plugins do
  gem 'jekyll-paginate'
  gem 'jekyll-gist'
  gem 'jekyll-sitemap'
  gem 'jekyll-spaceship'
  gem 'jekyll-babel'
  gem 'jemoji' if Gem::Version.new(RUBY_VERSION) < Gem::Version.new('3.4')
end

# Windows only (ignored on Linux CI)
platforms :mingw, :x64_mingw, :jruby do
  gem 'tzinfo-data'
end

platforms :mingw, :x64_mingw do
  # optional filesystem watcher for Windows; temporarily disabled pending build tools
  # gem 'wdm', '>= 0.1.0'
end