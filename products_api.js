//4 agent

const agent = []
 
app.get("/agent", (request, response) => {
    response.status(200).json(agent);
})

app.post("/agent", (request, response) => {
    const nameV = request.body.name;
    const priceV = request.body.price;
    const idV = agent.length + 1;
    let myIndex = 0;

    for (let i = 0; i <= agent.length - 1; i++) {

        if (agent[i].id == idV) {
            myIndex = i;
        }
    }

    const agentV = { id: idV, name: nameV, price: priceV };

    cart[myIndex] = agentV
})



app.put("/cart/:id", (request, response) => {
    const nameV = request.body.name;
    const priceV = request.body.price;
    const idV = request.params.id;

    //  let index=cart.findIndex(
    // rajmohan=>rajmohan.id==idV)

    let myIndex = 0;

    for (let i = 0; i <= cart.length - 1; i++) {

        if (cart[i].id == idV) {
            myIndex = i;
        }
    }

    const cartV = { id: idV, name: nameV, price: priceV };
    //cart.push(cartV);
    cart[myIndex] = cartV
    response.status(200).json(cartV);
})
 


//5 cart

const cart = []

app.get("/cart", (request, response) => {
    response.status(200).json(cart);
})

app.post("/cart", (request, response) => {
    const nameV = request.body.name;
    const priceV = request.body.price;
    const idV = cart.length + 1;

    let cartIndex=0;
    for(let i=0;i<=length-1;i++)
    {
        if(cart[i]==idV)
        {
            cartIndex=i;
        }
    }
    const cartV = { id: idV, name: nameV, price: priceV };
    agent.push(cartV);
    response.status(201).json(cartV);
})

app.put("/cart", (request, response) => {
    const nameV = request.body.name;
    const priceV = request.body.price;
    const idV = cart.length + 1;
    const cartV = { id: idV, name: nameV, price: priceV };
    agent.push(cartV);
    response.status(201).json(cartV);
})



//1 products

const products = []

app.get("/products", (request, response) => {
    response.status(200).json(products);
})  

app.post("/products", (request, response) => {
    const nameV = request.body.name;
    const priceV = request.body.price;
    const idV = products.length + 1;
    const productV = { id: idV, name: nameV, price: priceV };
    products.push(productV);
    response.status(201).json(productV);
})

//products update

app.put("/products", (request, response) => {
    const nameV = request.body.name;
    const priceV = request.body.price;
    const idV = products.length + 1;
    const productV = { id: idV, name: nameV, price: priceV };
    products.push(productV);
    response.status(201).json(productV);
})
