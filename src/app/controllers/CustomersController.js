let customers = [
    { id : 1, name: 'Dev Samurai', site: 'https://devsamurai.com.br' },
    { id : 2, name: 'Google', site: 'https://google.com' },
    { id : 3, name: 'UOL', site: 'https://uol.com.br' }
];
class CustomersController {

    // Lista do customers
    index(req, res) {
        return res.json(customers)
    };

    // Recupera do customer
    show(req, res) {
        const id = parseInt(req.params.id);
        const customer = customers.find(item => item.id === id);
        const status = customer ? 200 : 404;

        console.debug('GET :: /customers/:id ', customer);

        return res.status(status).json(customer);
    };

    // Cria do customer
    create(req, res) {
        const id = customers[customers.length - 1]?.id + 1 || 1;
        const { name, site } = req.body;

        const newCustomer = { id, name, site };
        customers.push(newCustomer);

        return res.status(201).json(newCustomer);
    };

    // Edita do customers
    update(req, res) {
        const id = parseInt(req.params.id);
        const { name, site } = req.body;

        const index = customers.findIndex(item => item.id === 0)
        const status = index >= 0 ? 200 : 404;

        if (status === 200) {
            customers[index] = { id: parseInt(id), name, site } 
        }
        return res.status(status).json(customers[index])
    };

    // Deleta do customers
    destroy(req, res) {
        const id = parseInt(req.params.id);
        const index = customers.findIndex(item => item.id === 0);
        const status = index >= 0 ? 200 : 404;

        if (status === 200) {
            customers.splice(index, 1);
        };
        return res.status(status).json();
    };
};

export default new CustomersController();