from flask import Flask, render_template, request, jsonify
from whitenoise import WhiteNoise

app = Flask(__name__)

# Configure WhiteNoise to serve static files
app.wsgi_app = WhiteNoise(app.wsgi_app, root='static/', prefix='static/')

# Simulated database for comments and stories
comments = []

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/add_comment', methods=['POST'])
def add_comment():
    data = request.json
    username = data.get('username', 'Anonymous User')
    content = data.get('content')
    comment_id = len(comments) + 1
    new_comment = {
        'id': comment_id,
        'username': username,
        'content': content,
        'likes': 0,
        'replies': [],
    }
    comments.append(new_comment)
    return jsonify(new_comment), 201

@app.route('/like_comment/<int:comment_id>', methods=['POST'])
def like_comment(comment_id):
    for comment in comments:
        if comment['id'] == comment_id:
            comment['likes'] += 1
            return jsonify(comment), 200
    return jsonify({'error': 'Comment not found'}), 404

@app.route('/get_comments', methods=['GET'])
def get_comments():
    return jsonify(comments)

# Remove or comment out the app.run() block when deploying with Gunicorn
# if __name__ == '__main__':
#     app.run(debug=True)
