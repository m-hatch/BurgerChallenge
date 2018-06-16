// default states
export const app = {
  api: 'http://ec2-54-152-121-162.compute-1.amazonaws.com/api/burgers/',
  toppings: {
    values: ['lettuce', 'tomato', 'cheese', 'ketchup', 'mayonnaise', 'mustard', 'bacon', 'onions', 'mushrooms', 'avocado', 'eggplant', 'beets'],
    selected: 'all'
  },
  "testData": {
    "id": 999,
    "name": "Silly Girl",
    "has_bun": "No",
    "has_patty": "Yes",
    "toppings": ["cheese", "bacon", "onions"]
  }
}

export const menu = {
  burgers: []
}

export const modal = {
  showModal: false,
  method: ''
}
