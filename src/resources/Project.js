export default {
  post (id) {
    return {
      path: `/post/${id}.json`,
      resolve: (response, mappers) => {
        let { title, index, content, image, link, prototype } = response.results[0]
        content = '<p>' + content.split('\n\n').join('</p><p>') + '</p>'
        return mappers.merge({ title, index, content, image, link, prototype })
      }
    }
  },
  apps () {
    return {
      path: '/apps.json',
      resolve: (response, mappers) => mappers.pipe(response.results)
    }
  }
}
