* en la carpeta routes > products.js hay que modificar el esquema para que coincida con la base de datos

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
  *                 type: number      
  */

* en el archivo requeste.http también hay que modificar schema de la base de datos

###
POST http://localhost:3000/api/products HTTP/1.1
Content-Type: application/json

{ 
  "nome": "Ração Three Dogs Original Frango, Carne e Arroz para Cães",
   "marca" : "Three Dogs",
  "tipo": "Three Dogs",
  "preco": 296.79,
  "tipo" : "Adultos"
}


* en la carpeta routes > products.js modifiqué la documentacion de swagger 

* codigo para crear un usuario

/**
 * @swagger
 * /api/products:
 *  post:
 *      summary: Create a new product
 *      tags: [Product]
 *      consumes:
 *          - application/json
 *      parameters:
 *        - in: body
 *          name: Product
 *          schema:
 *              $ref: '#/components/schemas/products'
 *      responses:
 *          201:
 *              description: Product created
 */


* codigo para traer todos los productos


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
 

* codigo para traer un producto  por ID

// Get a product by ID 
/**
 * @swagger
 * /api/products/{productsId}:
 *  get:
 *      summary: get a product
 *      tags: [Product]
 *      parameters:
 *        - in: path
 *          name: Product Id
 *          schema:
 *              type: string
 *          required: true
 *          description: Id of the product to updateOne
 *      responses:
 *          200:
 *              description: Get product
 *              schema:
*                type: array
*                items:
*                 $ref: '#/components/schemas/products'
 */


* codigo para modificar un producto 

/**
 * @swagger
 * /api/products/{productsId}:
 *  put:
 *      summary: Update a product
 *      tags: [Product]
 *      parameters:
 *        - in: path
 *          name: Product Id
 *          schema:
 *              type: string
 *          required: true
 *          description: Id of the product to updateOne
 *      responses:
 *          200:
 *              description: Product that was update
 *              schema:
 *                 $ref: '#/components/schemas/products'
 */

*codigo para borrar un producto

/**
 * @swagger
 * /api/products/{productsId}:
 *  delete:
 *      summary: Delete a product
 *      tags: [Product]
 *      parameters:
 *        - in: path
 *          name: Product Id
 *          schema:
 *              type: string
 *          required: true
 *          description: string id of user to delete
 *      responses:
 *          200:
 *              description: Product that was deleted
 */