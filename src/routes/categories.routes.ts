import { Router } from 'express';

const categoriesRoutes = Router();

const categories = [];

categoriesRoutes.post('/categories', (request, response) => {
  const { name, description } = request.body;

  categories.push({
    id: String(Math.random()),
    name,
    description,
  });

  return response.status(201).send();
});

export { categoriesRoutes };
