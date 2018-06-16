// default states
export const app = {
  api: 'http://ec2-54-152-121-162.compute-1.amazonaws.com/api/burgers/',
  toppings: {
    values: ['lettuce', 'tomato', 'cheese', 'ketchup', 'mayonnaise', 'mustard', 'bacon', 'onions', 'mushrooms', 'avocado', 'eggplant', 'beets'],
    selected: 'all'
  },
  initialValues: {
    has_bun: 'Yes',
    has_patty: 'Yes'
  }
}

export const menu = {
  burgers: []
}

export const modal = {
  showModal: false,
  formMethod: '',
  formId: null
}
