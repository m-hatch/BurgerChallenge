export default form => {
  const errors = {}
  
  if (!form.name) {
    errors.name = 'Required'
  }
  
  return errors
}
