const producerIbm = { name: 'IBM', country: 'USA' };
const producerSeiko = { name: 'Seiko', country: 'Japan' };
const model = {
    producers: [ producerIbm, producerSeiko],        
    products: [
        { name: 'A', producer: producerIbm },
        { name: 'B', producer: producerIbm },
        { name: 'C', producer: producerSeiko },
    ]
};

const modelA = {
    producers: [
        { name: 'IBM', country: 'USA' },
        { name: 'Seiko', country: 'Japan' },
    ],
    products: [
        { name: 'A' },
        { name: 'B' },
        { name: 'C' },
    ]
};
modelA.products[0].producer = modelA.producers[0];
modelA.products[1].producer = modelA.producers[0];
modelA.products[2].producer = modelA.producers[1];

const model2 = {
    producers: [
        { id: 1, name: 'IBM', country: 'USA' },
        { id: 2, name: 'Seiko', country: 'Japan' },
    ],
    products: [
        { id: 1, name: 'A', produceId: 1 },
        { id: 2, name: 'B', produceId: 1 },
        { id: 3, name: 'C', produceId: 2 },
        // { id: 1, name: 'A', producer: 'IBM', producerCountry: 'USA' },
        // { id: 2, name: 'B', producer: 'IBM', producerCountry: 'USA' },
        // { id: 3, name: 'C', producer: 'Seiko', producerCountry: 'Japan' },
    ]
};
