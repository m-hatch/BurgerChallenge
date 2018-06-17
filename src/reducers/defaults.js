// default states
export const app = {
  header: {
    img: 'https://crunchbase-production-res.cloudinary.com/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1405452555/nfqkd2f6t8bc5uc8du6g.png',
    title: 'Artivest Burgers',
    subtitle: 'Find and create your own burgers.'
  },
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
