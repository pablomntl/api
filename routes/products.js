const express = require('express');
const productsSchema = require('../models/products');

const router = express.Router();

/**
  * @swagger 
  *   components:
  *     schemas:
  *        products:
  *         type:
  *         properties:
  *              nome:
  *                type: string
  *              marca: 
  *                 type: string
  *              preco: 
  *                 type: number     
  *              tipo: 
  *                 type: string    
  */



// create product
router.post("/products", async (req, res) => {
  const product =  productsSchema(req.body);
  product
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


// get all products
router.get("/products", async (req, res) => {
    productsSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
    
});


// get  a product
router.get("/products/:id", async (req, res) => {
  const { id } =  req.params; await
  productsSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));

});



// delete a product
router.delete("/products/:id", async (req, res) => {
  const { id } =  req.params; await
  productsSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


// update a product 
router.put("/products/:id", async (req, res) => {
  const { id } =  req.params;
  const { nome, marca, preco, tipo} =  await req.body;
  productsSchema
    .updateOne({ _id: id }, { $set: { nome, marca, preco, tipo } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});



/**
 * @swagger
 * /api/products:
 *  post:
 *      summary: Create a product
 *      tags: [Product]
 *      requestBody: 
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                     $ref: '#/components/schemas/products'
 *                  required: true
 *      responses:
 *          200:
 *              description: Task criada com sucesso
 */

/**
* @swagger
* /api/products:
*  get:
*    summary: Get all products
*    tags: [Product] 
*    description: Use to request all product
*    responses:
*      '200': 
*         content:
*           aplication/json:
*            schema:
*               type: array
*               items:
*                 $ref: '#/components/schemas/products'
*/
/**
 

// Get user por id  
/**
 * @swagger
 * /api/products/{id}:
 *  get:
 *      summary: Produto por id
 *      tags: [Product]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:  
 *              type: string
 *          required: true 
 *      responses:
 *          200:
 *              description: user encontrada 
 *          422:
 *              description: user não encontrada
 */


/**

/**
 * @swagger
 * /api/products/{id}:
 *  put:
 *      summary: atualizar produto
 *      tags: [Product]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:  
 *              type: string
 *          required: true
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                       $ref: '#/components/schemas/products'
 *      responses:
 *          200:
 *              description: produto atualizado
 *          422:
 *              description: produto não encontrado
 */

/**
 * @swagger
 * /api/products/{id}:
 *  delete:
 *      description: deletar produto
 *      tags: [Product]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:  
 *              type: string
 *              $ref: '#/components/schemas/products'
 *          required: true 
 *      responses:
 *          200:
 *              description: user deletado
 *          422:
 *              description: user não encontrada
 */




module.exports = router;