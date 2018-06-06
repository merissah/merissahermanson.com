export default {
  apps () {
    return {
      path: '/apps.json',
      resolve: (response, mappers) => mappers.pipe(response.results)
    }
  },
  print () {
    return {
      path: '/print.json',
      resolve: (response, mappers) => mappers.pipe(response.results)
    }
  },
  paintings () {
    return {
      path: '/paintings.json',
      resolve: (response, mappers) => mappers.pipe(response.results)
    }
  },
  watercolors () {
    return {
      path: '/watercolors.json',
      resolve: (response, mappers) => mappers.pipe(response.results)
    }
  },
  charcoal () {
    return {
      path: '/charcoal.json',
      resolve: (response, mappers) => mappers.pipe(response.results)
    }
  }
}
