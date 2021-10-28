/* set version */
let version = '1.x';

/* version prefix setter */
function setVersionPrefix(children) {
    if (children.constructor === Array) {
        return children.map(child => {
            child[0] = `/${version}/${child[0]}`;
            return child;
        });
    }
    return `/${version}/${children}`;
}

/* module export */
module.exports = [
        {
        title: 'Marl Health  API',
        path: setVersionPrefix('api'),
        collapsable: true,
        children: setVersionPrefix([
            ['api/getting-started-with-the-api', 'Authentication'],
            ['api/customers', 'Customers'],
            ['api/locales', 'Locales'],
            ['api/addresses', 'Addresses'],
            ['api/patients', 'Patients'],
            ['api/products', 'Products'],
            ['api/categories', 'Categories'],
            ['api/attributes', 'Attributes'],
            ['api/attribute-families', 'Attribute Families'],
            ['api/cart', 'Shopping Cart'],
            ['api/orders', 'Orders'],
            ['api/invoices', 'Invoices'],
            ['api/shipments', 'Shipments'],
            ['api/sliders', 'Sliders'],
            ['api/transactions', 'Transactions'],
            ['api/reviews', 'Reviews'],
            ['api/wishlists', 'Wishlists'],
        ])
    },
   
   
]