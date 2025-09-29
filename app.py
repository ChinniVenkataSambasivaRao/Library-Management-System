from flask import Flask, render_template, request, redirect, url_for, flash, session
from datetime import datetime
import os

app = Flask(__name__)
app.secret_key = 'your_secret_key_here_change_in_production'

# In-memory data storage (using dictionaries and lists)
books = [
    {
        'id': 1,
        'title': 'To Kill a Mockingbird',
        'author': 'Harper Lee',
        'isbn': '978-0061120084',
        'status': 'Available',
        'borrowed_by': None,
        'borrowed_date': None
    },
    {
        'id': 2,
        'title': '1984',
        'author': 'George Orwell',
        'isbn': '978-0451524935',
        'status': 'Available',
        'borrowed_by': None,
        'borrowed_date': None
    },
    {
        'id': 3,
        'title': 'The Great Gatsby',
        'author': 'F. Scott Fitzgerald',
        'isbn': '978-0743273565',
        'status': 'Available',
        'borrowed_by': None,
        'borrowed_date': None
    },
    {
        'id': 4,
        'title': 'Pride and Prejudice',
        'author': 'Jane Austen',
        'isbn': '978-0141439518',
        'status': 'Available',
        'borrowed_by': None,
        'borrowed_date': None
    },
    {
        'id': 5,
        'title': 'The Catcher in the Rye',
        'author': 'J.D. Salinger',
        'isbn': '978-0316769174',
        'status': 'Available',
        'borrowed_by': None,
        'borrowed_date': None
    }
]

transactions = []
next_book_id = 6


@app.route('/')
def index():
    """Homepage displaying all books"""
    available_books = [book for book in books if book['status'] == 'Available']
    borrowed_books = [book for book in books if book['status'] == 'Borrowed']
    return render_template('index.html', 
                         available_books=available_books, 
                         borrowed_books=borrowed_books,
                         total_books=len(books))


@app.route('/add', methods=['GET', 'POST'])
def add_book():
    """Add a new book to the library"""
    if request.method == 'POST':
        global next_book_id
        
        title = request.form.get('title')
        author = request.form.get('author')
        isbn = request.form.get('isbn')
        
        new_book = {
            'id': next_book_id,
            'title': title,
            'author': author,
            'isbn': isbn,
            'status': 'Available',
            'borrowed_by': None,
            'borrowed_date': None
        }
        
        books.append(new_book)
        next_book_id += 1
        
        # Add transaction record
        transactions.append({
            'action': 'Added',
            'book_title': title,
            'user': 'Admin',
            'date': datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        })
        
        flash(f'Book "{title}" has been successfully added to the library!', 'success')
        return redirect(url_for('success', action='added', book_title=title))
    
    return render_template('add.html')


@app.route('/borrow', methods=['GET', 'POST'])
def borrow_book():
    """Borrow a book from the library"""
    if request.method == 'POST':
        book_id = int(request.form.get('book_id'))
        user_name = request.form.get('user_name')
        user_email = request.form.get('user_email')
        
        # Find the book
        book = next((b for b in books if b['id'] == book_id), None)
        
        if book and book['status'] == 'Available':
            book['status'] = 'Borrowed'
            book['borrowed_by'] = user_name
            book['borrowed_date'] = datetime.now().strftime('%Y-%m-%d')
            
            # Add transaction record
            transactions.append({
                'action': 'Borrowed',
                'book_title': book['title'],
                'user': user_name,
                'date': datetime.now().strftime('%Y-%m-%d %H:%M:%S')
            })
            
            flash(f'Book "{book["title"]}" has been borrowed successfully!', 'success')
            return redirect(url_for('success', action='borrowed', book_title=book['title']))
        else:
            flash('Book is not available for borrowing!', 'danger')
            return redirect(url_for('borrow_book'))
    
    available_books = [book for book in books if book['status'] == 'Available']
    return render_template('borrow.html', books=available_books)


@app.route('/return', methods=['GET', 'POST'])
def return_book():
    """Return a borrowed book"""
    if request.method == 'POST':
        book_id = int(request.form.get('book_id'))
        
        # Find the book
        book = next((b for b in books if b['id'] == book_id), None)
        
        if book and book['status'] == 'Borrowed':
            user_name = book['borrowed_by']
            book['status'] = 'Available'
            book['borrowed_by'] = None
            book['borrowed_date'] = None
            
            # Add transaction record
            transactions.append({
                'action': 'Returned',
                'book_title': book['title'],
                'user': user_name,
                'date': datetime.now().strftime('%Y-%m-%d %H:%M:%S')
            })
            
            flash(f'Book "{book["title"]}" has been returned successfully!', 'success')
            return redirect(url_for('success', action='returned', book_title=book['title']))
        else:
            flash('Book is not currently borrowed!', 'danger')
            return redirect(url_for('return_book'))
    
    borrowed_books = [book for book in books if book['status'] == 'Borrowed']
    return render_template('return.html', books=borrowed_books)


@app.route('/success')
def success():
    """Success confirmation page"""
    action = request.args.get('action', 'completed')
    book_title = request.args.get('book_title', 'Unknown')
    return render_template('success.html', action=action, book_title=book_title)


@app.route('/transactions')
def view_transactions():
    """View transaction history"""
    return render_template('transactions.html', transactions=reversed(transactions))


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
