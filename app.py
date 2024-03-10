from flask import Flask, json, jsonify, Request, render_template, url_for
# Instanciando o Flask
app = Flask(__name__)
# Pegando as informações do JSON
with open ("data.json") as data:
    dados = json.load(data)

# Rotas
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/games', methods=['GET'])
def getGames():
    return dados

@app.route('/games/<int:id>', methods=['GET'])
def getGame(id):
    for game in dados:
        if game.get("id") == id:
            return game
# Rodando o servidor
app.run(port=5000,host='localhost',debug=True)