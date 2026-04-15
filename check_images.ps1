Add-Type -AssemblyName System.Drawing
$files = Get-ChildItem "src\assets\feedback-*.png"
foreach ($f in $files) {
    $img = [System.Drawing.Image]::FromFile($f.FullName)
    Write-Host "$($f.Name): $($img.Width)x$($img.Height) px - $([math]::Round($f.Length/1024))KB"
    $img.Dispose()
}
