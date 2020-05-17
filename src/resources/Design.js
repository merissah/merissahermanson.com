export default {
  post (id) {
    console.log(id)
    return {
      path: `/apps/${id}.json`,
      resolve: (response, mappers) => {
        let { title, type, index, size, content, contents2, image, portImgs, videosrcs, link, iosLink, androidLink, prototype, product, date, role } = response.results[0]
        content = '<p>' + content.split('\n\n').join('</p><p>') + '</p>'
        return mappers.merge({ title, type, index, size, content, contents2, image, portImgs, videosrcs, link, iosLink, androidLink, prototype, product, date, role})
      },
    }
  },
  apps () {
    return {
      path: '/apps.json',
      resolve: (response, mappers) => mappers.pipe(response.results)
    }
  }
}
