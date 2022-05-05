var totaljob;
export class Joboffers {
    static getJoboffers = () => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_JOB_OFFER + '&category_slug=jobcate', {
                "method": "GET"
            }).then(response => {
                return Promise.all([response.json(), response.headers]);
            }).then(([response, header]) => {
                var data = [];
                var data2 = [];
                data2.push({ "totaljob": header.get('X-WP-total') });
                if (response) {
                    for (var i = 0; i < response.length; i++) {
                        data.push({
                            "id": response[i].id,
                            "name": response[i].title.rendered || '',
                            "content": response[i].content.rendered || '',
                            "Address": response[i]['post-meta-fields'] && response[i]['post-meta-fields']['Address'] || '',
                            "slug": response[i]._embedded['wp:term'][0][1].slug,
                            // "cate": response[i]._embedded['wp:term'][0][0].name || 'name',
                            "cate": response[i]._embedded['wp:term'][0][1].name || 'unknown',
                            "cateSlug": response[i]._embedded['wp:term'][0][1].slug,
                        });
                    }

                }
                resolve(data, data2)
            })
                .catch(err => {
                    console.log(err);
                    reject(err)
                });
        })
    }
    static getJoboffersCate = () => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_JOb_OFFER_CATE, {
                "method": "GET"
            }).then(response => response.json())
                .then(response => {
                    var data = [];
                    if (response) {
                        console.log('response==>', response);
                        for (var i = 0; i < response.length; i++) {
                            data.push({
                                "id": response[i].id,
                                "size": response[i].count,
                                // "name": response[i].title.rendered || '',
                                // "content": response[i].content.rendered || '',
                                // "Address": response[i]['post-meta-fields'] && response[i]['post-meta-fields']['Address'] || '',
                                // "slug": response[i].slug,
                                "name": response[i].name || 'unknown',
                                "slug": response[i].slug,
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
                    console.log("a==>", slug);
                    data.push({ "totaljob": totaljob });
                    if (response) {
                        console.log('response==>', response);
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