import swaggerJsDoc from 'swagger-jsdoc';

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Basic Api - Persona Crud',
            version: '1.0.0',
            description: 'API Information',
            contact: {
                name: 'Developer'
            },
            servers: [
                {
                    url: 'http://localhost:5001', // Adjust this to your server URL
                },
            ],
        },
    },
    apis: ['./routes/*.js'], // Adjust this path to where your route files are located
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);

export default swaggerSpec;
