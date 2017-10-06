export default class Api {
  static getAllPosts() {
    let headers = Object.assign({}, this.requestHeaders, {"Accepts": "application/json"})
    return fetch("/posts.json", {
      method: "GET",
      headers: headers,
    })
      .then(res => res.json())
      .then(respJson => respJson.posts)
      .catch(err => {
        console.error(err)
        return err
      })
  }

  static createPost(post) {
    let headers = Object.assign({}, this.requestHeaders, {
      "Accepts": "application/json",
      "Content-type": "application/json"
    })
    return fetch("/posts.json", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(post)
    })
      .then(res => res.json())
      .then(data => data.post)
      .catch(err => {
        console.error(err)
        return err
      })

  }
}
