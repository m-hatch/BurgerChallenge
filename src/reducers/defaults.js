// default states
export const app = {
  toppings: {
    values: ['lettuce', 'tomato', 'cheese', 'ketchup', 'mayonnaise', 'mustard', 'bacon', 'onions', 'mushrooms', 'avocado', 'eggplant', 'beets']
  },
  initialValues: {
    has_bun: 'Yes',
    has_patty: 'Yes'
  },
  filter: 'all'
}

export const menu = {
  burgers: []
}

export const modal = {
  showModal: false,
  formMethod: '',
  formId: null
}
