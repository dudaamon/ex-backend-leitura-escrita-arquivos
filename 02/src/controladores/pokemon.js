const { listarPokemons, detalharPokemon } = require('utils-playground');

const pokemons = async (req, res) => {
    const { pagina } = req.query;
    try {
        const listagem = await listarPokemons(pagina ?? 1);
        return res.json(listagem);
    } catch (erro) {
        res.status(404).json({ mensagem: erro.message });
    }
};

const pokemon = async (req, res) => {
    const { idOuNome } = req.params;
    try {
        const encontrado = await detalharPokemon(idOuNome);
        const { id, name, height, weight, base_experience, forms, abilities, species } = encontrado;
        return res.json({ id, name, height, weight, base_experience, forms, abilities, species });
    } catch (erro) {
        res.status(404).json({ mensagem: erro.message });
    }
};

module.exports = { pokemons, pokemon };