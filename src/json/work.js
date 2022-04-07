
import servBL from '../images/serv-blank.png';

export class Work {
    static getWork = () => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_WORK, {
                "method": "GET"
            }).then(response => response.json())
                .then(response => {
                    var data = [];
                    if (response) {
                        for (var i = 0; i < response.length; i++) {
                            data.push({
                                "id": response[i].id,
                                "name": response[i].title.rendered || '',
                                "img": response[i]._embedded && response[i]._embedded['wp:featuredmedia'][0].source_url || servBL,
                                "content": response[i].content.rendered || '',
                                "corporate": response[i]['post-meta-fields'] && response[i]['post-meta-fields']['corporate'] || '',
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