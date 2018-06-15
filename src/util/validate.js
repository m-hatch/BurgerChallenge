export default form => {
  const errors = {}
  if (!form.id) {
    errors.id = 'Required'
  }
  if (!form.name) {
    errors.name = 'Required'
  }
  return errors
}
