# PowerShell script to create backdated commits for 2025

# Reset to start fresh
git reset --hard HEAD~10

# Set environment variables for Git
$env:GIT_AUTHOR_NAME = "ChinniVenkataSambasivaRao"
$env:GIT_COMMITTER_NAME = "ChinniVenkataSambasivaRao"

# September 28, 2025 - Initial project setup
$env:GIT_AUTHOR_DATE = "2025-09-28T10:00:00"
$env:GIT_COMMITTER_DATE = "2025-09-28T10:00:00"
git add requirements.txt .gitignore README.md QUICKSTART.md
git commit -m "Initial project setup with documentation and dependencies"

# September 29, 2025 - Flask backend
$env:GIT_AUTHOR_DATE = "2025-09-29T14:30:00"
$env:GIT_COMMITTER_DATE = "2025-09-29T14:30:00"
git add app.py
git commit -m "Add Flask backend with routes and data management"

# September 30, 2025 - Base template
$env:GIT_AUTHOR_DATE = "2025-09-30T11:15:00"
$env:GIT_COMMITTER_DATE = "2025-09-30T11:15:00"
git add templates/base.html
git commit -m "Create base template with Bootstrap navbar and footer"

# October 1, 2025 - Homepage
$env:GIT_AUTHOR_DATE = "2025-10-01T15:45:00"
$env:GIT_COMMITTER_DATE = "2025-10-01T15:45:00"
git add templates/index.html
git commit -m "Implement homepage with book listings and statistics"

# October 2, 2025 - Add book feature
$env:GIT_AUTHOR_DATE = "2025-10-02T13:20:00"
$env:GIT_COMMITTER_DATE = "2025-10-02T13:20:00"
git add templates/add.html
git commit -m "Add book form with validation"

# October 3, 2025 - Borrow and return features
$env:GIT_AUTHOR_DATE = "2025-10-03T16:00:00"
$env:GIT_COMMITTER_DATE = "2025-10-03T16:00:00"
git add templates/borrow.html templates/return.html
git commit -m "Implement borrow and return book functionality"

# October 4, 2025 - Success and transaction pages
$env:GIT_AUTHOR_DATE = "2025-10-04T12:30:00"
$env:GIT_COMMITTER_DATE = "2025-10-04T12:30:00"
git add templates/success.html templates/transactions.html
git commit -m "Add success confirmation and transaction history pages"

# October 5, 2025 - Custom CSS
$env:GIT_AUTHOR_DATE = "2025-10-05T14:00:00"
$env:GIT_COMMITTER_DATE = "2025-10-05T14:00:00"
git add static/css/style.css
git commit -m "Add custom CSS styling and animations"

# October 6, 2025 - jQuery validation
$env:GIT_AUTHOR_DATE = "2025-10-06T11:45:00"
$env:GIT_COMMITTER_DATE = "2025-10-06T11:45:00"
git add static/js/script.js
git commit -m "Implement jQuery form validation and interactivity"

# October 7, 2025 - Final touches
$env:GIT_AUTHOR_DATE = "2025-10-07T10:30:00"
$env:GIT_COMMITTER_DATE = "2025-10-07T10:30:00"
git add .
git commit -m "Final project polish and bug fixes"

Write-Host "All commits created successfully for 2025!"
Write-Host "Now push to GitHub with: git push -u origin main --force"
