Write-Host "Cleaning frontend workspace..."
$paths = @(
  "package.json",
  "Dockerfile",
  "server.ts",
  "tailwind.config.js",
  "src",
  "app\.angular",
  "app\dist",
  "app\node_modules",
  "app\.git"
)

foreach ($p in $paths) {
  $full = Join-Path -Path $PSScriptRoot -ChildPath $p
  if (Test-Path $full) {
    try {
      if (Get-Item $full -ErrorAction Stop | Where-Object { $_.PSIsContainer }) {
        Write-Host "Removing directory: $full"
        Remove-Item -LiteralPath $full -Recurse -Force -ErrorAction Stop
      } else {
        Write-Host "Removing file: $full"
        Remove-Item -LiteralPath $full -Force -ErrorAction Stop
      }
    } catch {
        Write-Warning "Failed to remove ${full}: ${_}"
    }
  } else {
    Write-Host "Not found: $full"
  }
}

Write-Host "Cleanup complete. Review changes and commit as needed."