source 'https://rubygems.org'

ruby '>= 3.0'

gem 'jekyll', '~> 4.3.3'
gem 'webrick', '~> 1.8'
gem 'kramdown-parser-gfm'
gem 'faraday-retry' # silences the Faraday retry warning

group :jekyll_plugins do
  gem 'jekyll-paginate'
  gem 'jekyll-gist'
  gem 'jekyll-sitemap'
  gem 'jekyll-spaceship'
  gem 'jekyll-babel'
  gem 'jemoji'
end

# Windows only (ignored on Linux CI)
gem 'wdm', '~> 0.1.1', platforms: %i[mingw x64_mingw]
gem 'tzinfo-data', platforms: %i[mingw x64_mingw jruby]