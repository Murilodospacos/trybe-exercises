const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
      sabores: ['muzzarella', 'calabresa'],
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
}
// Exercicios Parte I 1
const customerInfo = (order1) => `Olá ${order1.order.delivery.deliveryPerson} entrega para:${order1.name}, Telefone: ${order1.phoneNumber} R.${order1.address.street}, N°:${order1.address.number} AP:${order1.address.apartment}`;
console.log(customerInfo(order));

// Exercicios Parte I 2
const orderModifier = (order2) => {
  `Olá ${order2.name} o total do seu pedido de ${order2.order.pizza.sabores[0]}, ${order2.order.pizza.sabores[1]} e ${order2.order.drinks.coke.type} é R$ ${order2.order.drinks.coke.price}`;
}
console.log(orderModifier(order));

