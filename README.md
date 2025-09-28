# 📚 Library Management System

A complete full-stack web application for managing library books, built with Flask, Bootstrap, and jQuery.

## 🌟 Features

- **📖 Book Management**: Add new books to the library collection
- **📥 Borrow Books**: Users can borrow available books
- **📤 Return Books**: Return borrowed books back to the library
- **📊 Dashboard**: View statistics and all books at a glance
- **📜 Transaction History**: Track all library activities
- **✅ Form Validation**: Client-side validation using jQuery
- **🎨 Responsive Design**: Mobile-friendly interface with Bootstrap 5
- **🔔 Flash Messages**: User-friendly success and error notifications

## 🛠️ Technologies Used

### Backend
- **Flask 2.3.0** - Python web framework
- **Jinja2** - Template engine
- **Werkzeug** - WSGI utility library

### Frontend
- **HTML5** - Semantic markup
- **Bootstrap 5.3.0** - CSS framework
- **jQuery 3.6.0** - JavaScript library
- **Bootstrap Icons** - Icon library

### Data Storage
- **In-memory storage** - Python dictionaries and lists (can be easily upgraded to SQLite/PostgreSQL)

## 📁 Project Structure

```
library-management/
│
├── app.py                  # Main Flask application
├── requirements.txt        # Python dependencies
├── README.md              # Project documentation
│
├── static/                # Static files
│   ├── css/
│   │   └── style.css      # Custom CSS styles
│   └── js/
│       └── script.js      # jQuery validation and interactivity
│
└── templates/             # HTML templates
    ├── base.html          # Base template with navbar and footer
    ├── index.html         # Homepage with book listings
    ├── add.html           # Add new book form
    ├── borrow.html        # Borrow book form
    ├── return.html        # Return book form
    ├── success.html       # Success confirmation page
    └── transactions.html  # Transaction history page
```

## 🚀 Installation & Setup

### Prerequisites
- Python 3.7 or higher
- pip (Python package manager)

### Step 1: Clone or Download the Project
```bash
cd "library management"
```

### Step 2: Create a Virtual Environment (Recommended)
```bash
# Windows
python -m venv venv
venv\Scripts\activate

# macOS/Linux
python3 -m venv venv
source venv/bin/activate
```

### Step 3: Install Dependencies
```bash
pip install -r requirements.txt
```

### Step 4: Run the Application
```bash
python app.py
```

### Step 5: Access the Application
Open your web browser and navigate to:
```
http://localhost:5000
```

## 📖 Usage Guide

### 1. Homepage (/)
- View all available and borrowed books
- See library statistics (total books, available, borrowed)
- Quick access to all features

### 2. Add Book (/add)
- Fill in book details: Title, Author, ISBN
- Form validation ensures all fields are filled correctly
- Success message confirms book addition

### 3. Borrow Book (/borrow)
- Select from available books
- Enter borrower name and email
- Email validation ensures correct format
- Book status updates to "Borrowed"

### 4. Return Book (/return)
- Select from currently borrowed books
- View borrower details before returning
- Book status updates back to "Available"

### 5. Transaction History (/transactions)
- View all library activities
- See who borrowed/returned books and when
- Track book additions

## 🎨 Features Breakdown

### Frontend (HTML + Bootstrap)
- **Semantic HTML5**: Proper use of header, nav, section, footer
- **Bootstrap Components**: Cards, Tables, Forms, Buttons, Navbar, Alerts
- **Responsive Grid**: Mobile-first design with Bootstrap grid system
- **Bootstrap Icons**: Visual enhancement with icon library

### JavaScript + jQuery
- **Form Validation**: Real-time validation for all forms
- **Email Validation**: Regex pattern matching
- **ISBN Validation**: Format checking for ISBN numbers
- **Dynamic Content**: Show/hide elements based on user actions
- **Loading States**: Button states during form submission
- **Auto-dismiss Alerts**: Alerts fade out after 5 seconds
- **Hover Effects**: Interactive card and table animations

### Backend (Flask)
- **RESTful Routes**: Clean URL structure
- **Template Rendering**: Jinja2 templating with inheritance
- **Flash Messages**: User feedback system
- **Data Management**: In-memory storage with Python data structures
- **Transaction Logging**: Track all library activities

## 🔧 Customization

### Change Secret Key
For production, update the secret key in `app.py`:
```python
app.secret_key = 'your_secure_random_key_here'
```

### Add Database Support
To use SQLite instead of in-memory storage:
1. Install SQLAlchemy: `pip install flask-sqlalchemy`
2. Create database models
3. Update routes to use database queries

### Modify Styling
- Edit `static/css/style.css` for custom styles
- Update Bootstrap classes in templates
- Change color scheme in CSS variables

### Add New Features
- User authentication
- Book categories
- Due date tracking
- Late fee calculation
- Search and filter functionality
- Export data to CSV/PDF

## 📝 Sample Data

The application comes pre-loaded with 5 classic books:
1. To Kill a Mockingbird - Harper Lee
2. 1984 - George Orwell
3. The Great Gatsby - F. Scott Fitzgerald
4. Pride and Prejudice - Jane Austen
5. The Catcher in the Rye - J.D. Salinger

## 🐛 Troubleshooting

### Port Already in Use
If port 5000 is already in use, change it in `app.py`:
```python
app.run(debug=True, host='0.0.0.0', port=5001)
```

### Static Files Not Loading
Ensure the folder structure is correct:
- `static/css/style.css`
- `static/js/script.js`

### Templates Not Found
Make sure all HTML files are in the `templates/` folder.

## 🔒 Security Notes

- Change the secret key before deploying to production
- Add CSRF protection for forms
- Implement user authentication
- Sanitize user inputs
- Use environment variables for sensitive data

## 📈 Future Enhancements

- [ ] User authentication and authorization
- [ ] Database integration (SQLite/PostgreSQL)
- [ ] Book cover images
- [ ] Advanced search and filtering
- [ ] Due date reminders
- [ ] Email notifications
- [ ] Admin dashboard
- [ ] Book reservations
- [ ] Multiple copies of same book
- [ ] Book ratings and reviews

## 📄 License

This project is open-source and available for educational purposes.

## 👨‍💻 Author

Created as a learning project for full-stack web development with Flask.

## 🙏 Acknowledgments

- Flask documentation
- Bootstrap documentation
- jQuery documentation
- Bootstrap Icons

---

**Happy Coding! 📚✨**
