from flask import Flask, jsonify, redirect, request, render_template, send_from_directory, url_for

app = Flask(__name__)

songs = ['pride','noenemy','afterdark','limbo','myeyes','praisethelord','skyfall','lethergo']

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/initial', methods=['POST'])
def initial():
    if request.content_type == 'application/json':
        return jsonify({'song': songs})

@app.route('/next/<curr_id>', methods=['POST'])
def next(curr_id):
    if request.content_type == 'application/json':
        song = songs[songs.index(curr_id) + 1]
        return jsonify({'curr_id': curr_id, 'next_id': song})

@app.route('/database/<song_id>', methods=['POST'])
def database(song_id):
    if request.content_type == 'application/json':
        master_path = "/database/" + song_id + '/master.m3u8'
        meta_path = "/database/" + song_id + '/meta.txt'
        thumbnail = '/database/' + song_id + '/thumbnail.jpg'
        return jsonify({'master': master_path, 'meta': meta_path, 'thumbnail': thumbnail})

@app.route('/database/<song_id>/thumbnail.jpg', methods=['POST'])
def thumbnail(song_id):
    if request.content_type == 'application/json':
        return send_from_directory(f'database/{song_id}/','thumbnail.jpg')

@app.route('/database/<song_id>/meta.txt', methods=["POST"])
def send_meta(song_id):
    if request.content_type == 'application/json':
        with open(f'database/{song_id}/meta.txt', 'r') as file:
            data = []
            for line in file:
                data.append(line)
            
            song, author = data[0], data[1]
        return jsonify({'song': song, 'author': author})

@app.route('/database/<song_id>/<value>')
def send_master(song_id, value):
    return send_from_directory(f'database/{song_id}/',f'{value}')

if __name__ == '__main__':
    app.run()
