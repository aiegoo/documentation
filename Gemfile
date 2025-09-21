source 'https://rubygems.org'

ruby '>= 3.0'

gem 'jekyll', '~> 4.3.3'
gem 'kramdown-parser-gfm'
gem 'webrick', '~> 1.8'

group :jekyll_plugins do
  gem 'jekyll-sitemap'
  gem 'jekyll-paginate'
  gem 'jekyll-spaceship'
  gem 'jekyll-babel'
  gem 'jekyll-plantuml'   # remove if unused
  gem 'jemoji'            # optional; keep if you use emoji
end

# Windows-only helpers (won't install on Linux CI)
gem 'wdm', '~> 0.1.1', platforms: %i[mingw x64_mingw]
gem 'tzinfo-data', platforms: %i[mingw x64_mingw jruby]