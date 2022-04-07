export class Joboffers {

    static getJoboffers = () => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_JOB_OFFER, {
                "method": "GET"
            }).then(response => response.json())
                .then(response => {
                    var data = [];
                    // var a = response[0]._embedded['wp:term'][0][0];
                    // console.log("a===>", a);
                    if (response) {
                        for (var i = 0; i < response.length; i++) {
                            data.push({
                                "id": response[i].id,
                                "name": response[i].title.rendered || '',
                                "content": response[i].content.rendered || '',
                                "Address": response[i]['post-meta-fields'] && response[i]['post-meta-fields']['Address'] || '',
                                "slug": response[i].slug,
                                // "cate": response[i]._embedded['wp:term'][0][0].name || 'name',
                                "cate": response[i]._embedded['wp:term'][0][1].name || 'unknown',
                                "cateSlug": response[i]._embedded['wp:term'][0][1].slug,
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
    static getJoboffersDetails = (slug) => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_JOB_OFFER + '&category_slug=' + slug, {
                "method": "GET"
            }).then(response => response.json())
                .then(response => {
                    var data = [];
                    // var a = slug;
                    console.log("a==>", slug);
                    if (response) {
                        for (var i = 0; i < response.length; i++) {
                            data.push({
                                "id": response[i].id,
                                "name": response[i].title.rendered || '',
                                "content": response[i].content.rendered || '',
                                "Address": response[i]['post-meta-fields'] && response[i]['post-meta-fields']['Address'] || '',
                                "slug": response[i].slug,
                                "cate": response[i]._embedded['wp:term'][0][1].name || 'unknown',
                                "cateSlug": response[i]._embedded['wp:term'][0][1].slug,
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