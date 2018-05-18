export default {
  print () {
    return {
      path: '/print.json',
      resolve: (response, mappers) => mappers.pipe(response.results)
    }
  }
}
