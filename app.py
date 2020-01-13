import os

from flask import Flask, render_template, request, redirect, url_for, flash
from flask_mail import Mail, Message

app = Flask(__name__)
app.config['SECRET_KEY'] = os.urandom(32)

app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = ''
app.config['MAIL_PASSWORD'] = ''
app.config['MAIL_USE_SSL'] = True

mailer = Mail(app)

def send_email(name, email, message):
    final = 'Name: {0}\nEmail: {1}\n\n{2}'.format(name, email, message)
    msg = Message('Portfolio Contact Form', sender = '', recipients = [''], body = final)  
    mailer.send(msg)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/contact/', methods = ['POST'])
def contact():
    name = request.form['name']
    email = request.form['email']
    message = request.form['message']
    send_email(name, email, message)
    flash('Message sent successfully!')
    return redirect(url_for('index'))

if __name__ == "__main__":
    app.run(host = '0.0.0.0', port = 80, debug = True)
