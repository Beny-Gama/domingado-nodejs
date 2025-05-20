module.exports = { 
    dialect: 'postgres',
    host: 'localhost',
    username: "postgres",
    password: "escret",
    database: "teste-dominando-nodejs",
    define: {
        timestamps: true, // cria duas colunas: createAt e updatedAt
        underscored: true, // nomencladtura _ (não comelCase) Ex: customerGrups => customers_group
        underscoredAll: true, // chave estrangeira
    },
};