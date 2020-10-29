export default {
  study () {
    return {
      path: '/study.json',
      resolve: (response, mappers) => mappers.pipe(response.results)
    }
  },
  design () {
    return {
      path: '/design.json',
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
