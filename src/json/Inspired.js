
import servBL from '../images/serv-blank.jpg';
export class Inspired {
    static getInspired = () => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_GET_INSPIRED, {
                "method": "GET"
            }).then(response => response.json())
                .then(response => {
                    var data = [];
                    if (response) {
                        for (var i = 0; i < response.length; i++) {
                            data.push({
                                "id": response[i].id,
                                "name": response[i].title.rendered || '',
                                "content": response[i].content.rendered || '',
                            });
                        }

                    }
                    resolve(data)
                })
                .catch(err => {
                    console.log(err);
                    reject(err)
                });
        })
    }
    static getInspired2 = (start) => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_GET_INSPIRED2 + `&page=${start}`, {
                "method": "GET"
            }).then(response => response.json())
                .then(response => {
                    // { console.log(response) }
                    var data = [];
                    if (response) {
                        for (var i = 0; i < response.length; i++) {
                            data.push({
                                "id": response[i].id,
                                "name": response[i].title.rendered || '',
                                "img": response[i]._embedded['wp:featuredmedia'] && response[i]._embedded['wp:featuredmedia'][0].source_url || servBL,
                                "slug": response[i].slug,
                                "author_name": response[i]._embedded['author'][0].name,
                                "author_profile": response[i]._embedded['author'] && response[i]._embedded['author'][0].avatar_urls['96'] || servBL,
                                "content": response[i].content.rendered || '',
                            });
                        }

                    }
                    resolve(data)
                })
                .catch(err => {
                    console.log(err);
                    reject(err)
                });
        })
    }
}