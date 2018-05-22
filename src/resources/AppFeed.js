export default {
  apps () {
    return {
      path: '/apps.json',
      resolve: (response, mappers) => mappers.pipe(response.results)
    }
  }
}