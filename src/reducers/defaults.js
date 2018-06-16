// default states
export const app = {
  api: 'http://ec2-54-152-121-162.compute-1.amazonaws.com/api/burgers/',
  toppings: {
    values: ['lettuce', 'tomato', 'cheese', 'ketchup', 'mayonnaise', 'mustard', 'bacon', 'onions'],
    selected: 'all'
  }
}

export const menu = {
  burgers: []
}

export const modal = {
  showModal: false,
  isComplete: false
}
