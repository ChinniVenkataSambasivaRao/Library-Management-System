// Library Management System - JavaScript with jQuery

$(document).ready(function() {
    console.log('Library Management System loaded successfully!');
    
    // Form validation for Add Book
    $('#addBookForm').on('submit', function(e) {
        let isValid = true;
        
        // Get form values
        const title = $('#title').val().trim();
        const author = $('#author').val().trim();
        const isbn = $('#isbn').val().trim();
        
        // Reset previous validation states
        $(this).find('.form-control').removeClass('is-invalid is-valid');
        
        // Validate title
        if (title === '') {
            $('#title').addClass('is-invalid');
            isValid = false;
        } else {
            $('#title').addClass('is-valid');
        }
        
        // Validate author
        if (author === '') {
            $('#author').addClass('is-invalid');
            isValid = false;
        } else {
            $('#author').addClass('is-valid');
        }
        
        // Validate ISBN (basic format check)
        const isbnPattern = /^(?:ISBN(?:-1[03])?:? )?(?=[0-9X]{10}$|(?=(?:[0-9]+[- ]){3})[- 0-9X]{13}$|97[89][0-9]{10}$|(?=(?:[0-9]+[- ]){4})[- 0-9]{17}$)(?:97[89][- ]?)?[0-9]{1,5}[- ]?[0-9]+[- ]?[0-9]+[- ]?[0-9X]$/;
        
        if (isbn === '') {
            $('#isbn').addClass('is-invalid');
            $('#isbn').siblings('.invalid-feedback').text('Please enter an ISBN.');
            isValid = false;
        } else if (!isbnPattern.test(isbn.replace(/[- ]/g, ''))) {
            $('#isbn').addClass('is-invalid');
            $('#isbn').siblings('.invalid-feedback').text('Please enter a valid ISBN format.');
            isValid = false;
        } else {
            $('#isbn').addClass('is-valid');
        }
        
        // Prevent form submission if validation fails
        if (!isValid) {
            e.preventDefault();
            showAlert('Please fill in all required fields correctly.', 'danger');
            return false;
        }
        
        // Show loading state
        const submitBtn = $(this).find('button[type="submit"]');
        submitBtn.prop('disabled', true).html('<span class="spinner-border spinner-border-sm"></span> Adding...');
    });
    
    // Form validation for Borrow Book
    $('#borrowBookForm').on('submit', function(e) {
        let isValid = true;
        
        // Get form values
        const bookId = $('#book_id').val();
        const userName = $('#user_name').val().trim();
        const userEmail = $('#user_email').val().trim();
        
        // Reset previous validation states
        $(this).find('.form-control, .form-select').removeClass('is-invalid is-valid');
        
        // Validate book selection
        if (bookId === '') {
            $('#book_id').addClass('is-invalid');
            isValid = false;
        } else {
            $('#book_id').addClass('is-valid');
        }
        
        // Validate user name
        if (userName === '') {
            $('#user_name').addClass('is-invalid');
            isValid = false;
        } else if (userName.length < 3) {
            $('#user_name').addClass('is-invalid');
            $('#user_name').siblings('.invalid-feedback').text('Name must be at least 3 characters long.');
            isValid = false;
        } else {
            $('#user_name').addClass('is-valid');
        }
        
        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (userEmail === '') {
            $('#user_email').addClass('is-invalid');
            $('#user_email').siblings('.invalid-feedback').text('Please enter your email address.');
            isValid = false;
        } else if (!emailPattern.test(userEmail)) {
            $('#user_email').addClass('is-invalid');
            $('#user_email').siblings('.invalid-feedback').text('Please enter a valid email address.');
            isValid = false;
        } else {
            $('#user_email').addClass('is-valid');
        }
        
        // Prevent form submission if validation fails
        if (!isValid) {
            e.preventDefault();
            showAlert('Please fill in all required fields correctly.', 'danger');
            return false;
        }
        
        // Show loading state
        const submitBtn = $(this).find('button[type="submit"]');
        submitBtn.prop('disabled', true).html('<span class="spinner-border spinner-border-sm"></span> Processing...');
    });
    
    // Form validation for Return Book
    $('#returnBookForm').on('submit', function(e) {
        const bookId = $('#book_id').val();
        
        // Reset previous validation states
        $('#book_id').removeClass('is-invalid is-valid');
        
        // Validate book selection
        if (bookId === '') {
            e.preventDefault();
            $('#book_id').addClass('is-invalid');
            showAlert('Please select a book to return.', 'danger');
            return false;
        } else {
            $('#book_id').addClass('is-valid');
        }
        
        // Show loading state
        const submitBtn = $(this).find('button[type="submit"]');
        submitBtn.prop('disabled', true).html('<span class="spinner-border spinner-border-sm"></span> Processing...');
    });
    
    // Real-time validation for inputs
    $('.form-control, .form-select').on('blur', function() {
        const $input = $(this);
        const value = $input.val().trim();
        
        if ($input.prop('required') && value === '') {
            $input.addClass('is-invalid').removeClass('is-valid');
        } else if (value !== '') {
            // Additional validation for specific fields
            if ($input.attr('type') === 'email') {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (emailPattern.test(value)) {
                    $input.addClass('is-valid').removeClass('is-invalid');
                } else {
                    $input.addClass('is-invalid').removeClass('is-valid');
                }
            } else {
                $input.addClass('is-valid').removeClass('is-invalid');
            }
        }
    });
    
    // Clear validation on input
    $('.form-control, .form-select').on('input change', function() {
        $(this).removeClass('is-invalid');
    });
    
    // Auto-dismiss alerts after 5 seconds
    setTimeout(function() {
        $('.alert').fadeOut('slow', function() {
            $(this).remove();
        });
    }, 5000);
    
    // Smooth scroll to top
    $('a[href="#"]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 'smooth');
    });
    
    // Add animation to cards on hover
    $('.card').hover(
        function() {
            $(this).addClass('shadow-lg').css('transition', 'all 0.3s ease');
        },
        function() {
            $(this).removeClass('shadow-lg');
        }
    );
    
    // Animate statistics cards on page load
    if ($('.stats-card').length > 0) {
        $('.stats-card').each(function(index) {
            $(this).delay(index * 100).fadeIn(500);
        });
    }
    
    // Table row hover effect
    $('table tbody tr').hover(
        function() {
            $(this).css('background-color', '#f8f9fa');
        },
        function() {
            $(this).css('background-color', '');
        }
    );
    
    // Confirmation dialog for form submissions
    $('.btn-warning[type="submit"], .btn-danger[type="submit"]').on('click', function(e) {
        const action = $(this).closest('form').attr('id');
        if (action === 'returnBookForm') {
            const bookTitle = $('#book_id option:selected').text();
            if (!confirm(`Are you sure you want to return "${bookTitle}"?`)) {
                e.preventDefault();
                return false;
            }
        }
    });
});

// Helper function to show custom alerts
function showAlert(message, type = 'info') {
    const alertHtml = `
        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>
    `;
    
    // Remove existing alerts
    $('.container .alert').remove();
    
    // Add new alert
    $('.container').first().prepend(alertHtml);
    
    // Auto-dismiss after 5 seconds
    setTimeout(function() {
        $('.alert').fadeOut('slow', function() {
            $(this).remove();
        });
    }, 5000);
}

// Search functionality for tables (optional enhancement)
function filterTable(searchTerm) {
    const rows = $('table tbody tr');
    
    rows.each(function() {
        const rowText = $(this).text().toLowerCase();
        if (rowText.includes(searchTerm.toLowerCase())) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
}

// Print functionality (optional)
function printPage() {
    window.print();
}

// Export to CSV (optional enhancement)
function exportTableToCSV(filename) {
    const csv = [];
    const rows = document.querySelectorAll('table tr');
    
    for (let i = 0; i < rows.length; i++) {
        const row = [];
        const cols = rows[i].querySelectorAll('td, th');
        
        for (let j = 0; j < cols.length; j++) {
            row.push(cols[j].innerText);
        }
        
        csv.push(row.join(','));
    }
    
    // Download CSV file
    const csvFile = new Blob([csv.join('\n')], { type: 'text/csv' });
    const downloadLink = document.createElement('a');
    downloadLink.download = filename;
    downloadLink.href = window.URL.createObjectURL(csvFile);
    downloadLink.style.display = 'none';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}
