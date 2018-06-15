// default states
export const app = {
  "testData": {
    "id": 999,
    "name": "Silly Girl",
    "has_bun": "No",
    "has_patty": "Yes",
    "toppings": ["cheese", "bacon", "onions"]
  },
  toppings: {
    values: ['lettuce', 'tomato', 'cheese', 'ketchup', 'mayonnaise', 'mustard', 'bacon', 'onions'],
    selected: 'all'
  },
  api: 'http://ec2-54-152-121-162.compute-1.amazonaws.com/api/burgers/'
}

export const menu = {
  burgers: []
}

export const modal = {
  showModal: false,
  isComplete: false
}
