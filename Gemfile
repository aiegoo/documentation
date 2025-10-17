source "https://rubygems.org"

# Use the github-pages gem which includes Jekyll and other dependencies
gem "github-pages", group: :jekyll_plugins

# Required plugins
gem "jekyll-include-cache", group: :jekyll_plugins

# These gems are needed for Ruby 3.0+
gem "csv"
gem "base64"

# Windows and JRuby does not include zoneinfo files
platforms :windows, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", ">= 0.1.1", :platforms => [:windows]

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]