param(
    [string]$Target = "_wiki/blog/2025-09-22-likelion-ai-track-application.md"
)

Set-Location (git rev-parse --show-toplevel)

# Get staged .md files under _wiki/**/2024, excluding deleted
$staged = git diff --cached --name-status |
Where-Object { $_ -match '^[AM]\s+(.+\.md)$' } |
ForEach-Object { ($_ -split '\s+')[1] } |
Where-Object { $_ -match '^_wiki/(blog|diary)/.*2024/.*\.md$' }

if (-not $staged) {
    Write-Host "No staged 2024 wiki/diary markdown files found." -ForegroundColor Yellow
    exit 0
}

function Get-FrontMatter {
    param([string]$text)
    if ($text -match '(?s)^---\s*(.*?)\s*---') { return $matches[1] } else { return "" }
}

function Get-YamlVal {
    param([string]$yaml, [string]$key)
    if ($yaml -match "(?m)^\s*$key\s*:\s*""?([^`"`r`n]+)""?") { return $matches[1] } else { return $null }
}

$rows = @()

foreach ($path in $staged) {
    $text = Get-Content -Raw -LiteralPath $path
    $yaml = Get-FrontMatter $text

    $title = Get-YamlVal $yaml 'title'
    if (-not $title) { $title = [IO.Path]::GetFileNameWithoutExtension($path) }

    $summary = Get-YamlVal $yaml 'summary'
    if (-not $summary) { $summary = "" }

    $permalink = Get-YamlVal $yaml 'permalink'
    if (-not $permalink) {
        $base = [IO.Path]::GetFileNameWithoutExtension($path)
        $permalink = "/wiki/$base.html"
    }
    # Normalize link to start with /
    if ($permalink -notmatch '^\s*/') { $permalink = "/$permalink" }

    $rows += "| $title | $summary | [$permalink]($permalink) |"
}

$targetPath = Resolve-Path $Target
$content = Get-Content -Raw -LiteralPath $targetPath

$header = "| 문서 | 요약 | 링크 |`n|------|------|------|"
$table = $header + "`n" + ($rows -join "`n") + "`n{:.high-performance-table}`n{:.customtable}"

$pattern = '(?s)<!-- ai-2024-table:start -->.*?<!-- ai-2024-table:end -->'
$replacement = "<!-- ai-2024-table:start -->`n$table`n<!-- ai-2024-table:end -->"

$new = [regex]::Replace($content, $pattern, $replacement)
Set-Content -LiteralPath $targetPath -Value $new -Encoding UTF8

Write-Host "Updated table in $Target with $($rows.Count) rows." -ForegroundColor Green