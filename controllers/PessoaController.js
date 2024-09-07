const axios = require('axios');
const { Pessoa } = require('../models');
console.log(Pessoa)

exports.createPessoa = async (req, res) => {
    try {
        const {Id, Nome, CPF, Telefone} = req.body;
        
        const novaPessoa = await Pessoa.create({
            Id,
            Nome,
            CPF,
            Telefone,
        });

        res.status(201).json(novoPessoa);
    }catch(error) {
        console.error(error)
        res.status(500).json({ error: 'Erro ao criar Pessoa', details: error.message});
    }
};

exports.getAllPessoas = async (req, res) => {
    try {
        const pessoas = await Pessoa.findAll();
        res.status(200).json(pessoas);
    }catch(error) {
        res.status(500).json({ error: 'Erro ao buscar pessoas', details: error.message});
    }
};

exports.getPessoaById = async (req, res) => {
    try {
        const { Id } = req.params;
        const pessoa = await Pessoa.findByPk(Id);

        if (!pessoa) {
            return res.status(404).json({ error: 'Endereço não encontrado'});
        }

        res.status(200).json(pessoas);
    }catch(error) {
        res.status(500).json({ error: 'Erro ao buscar endereço', details: error.message});
    }
}

exports.updatePessoa = async (req, res) => {
    try {
        const { Id } = req.params;
        const {Nome, CPF, Telefone} = req.body;

        const pessoa = await Pessoa.findByPk(Id);

        if (!pessoa) {
            return res.status(404).json({ error: 'Endereço não encontrado'})
        }

        pessoa.Id = Id;
        pessoa.Nome = Nome;
        pessoa.CPF = CPF;
        pessoa.Telefone = Telefone;

        await pessoa.save();

        res.status(200).json(pessoa)
    }catch(error) {
        res.status(500).json({ error: 'Erro ao buscar endereço', details: error.message})
    }
}

exports.deletePessoa = async (req, res) => {
    try {
        const { Id } = req.params;
        const pessoa = await Pessoa.findByPk(Id)

        if (!pessoa) {
            return res.status(404).json({ error: 'Endereço não encontrado'})
        }

        await pessoa.destroy();

        res.status(204).send();
    }catch(error) {
        res.status(500).json({ error: 'Erro ao buscar endereço', details: error.message})
    }
}