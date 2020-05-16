export default {
  studies () {
    return {
      path: '/case-studies.json',
      resolve: (response, mappers) => mappers.pipe(response.results)
    }
  },
  apps () {
    return {
      path: '/apps.json',
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
