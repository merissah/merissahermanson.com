export default {
  paintings () {
    return {
      path: '/paintings.json',
      resolve: (response, mappers) => mappers.pipe(response.results)
    }
  }
}
