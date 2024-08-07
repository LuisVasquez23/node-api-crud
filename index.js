import express from 'express';
import bodyParser from 'body-parser';  
import userRoutes from './routes/users.js';
import swaggerSpec from './config/swagger.js';
import swaggerUi from 'swagger-ui-express';  // Corrected import statement

const app = express();
const PORT = 5001;  

app.use(bodyParser.json());

// ADD ROUTES 
app.use("/users", userRoutes);

app.get('/', (req, res) => res.send('HELLO FROM HOMEPAGE'));

// SWAGGER CONFIGURATION
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
    console.log(`Server running on port: http://localhost:${PORT}`);
});
