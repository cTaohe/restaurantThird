function sortHepler(request) {
  const sortRule = {}
  const queryString = request.query
  if (queryString.sort === 'name_en_asc') sortRule.name_en = 'asc'
  if (queryString.sort === 'name_en_desc') sortRule.name_en = 'desc'
  if (queryString.sort === 'rating_desc') sortRule.rating = -1
  if (queryString.sort === 'category_desc') sortRule.category = 'desc'
  if (queryString.sort === 'location_desc') sortRule.location = 'desc'
  return sortRule
}

module.exports = sortHepler