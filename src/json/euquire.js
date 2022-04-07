
export class Euquire {
    static getEuquire =  () =>{
        return new Promise(async (resolve, reject)=>{
            await fetch(process.env.REACT_APP_EUQUIRE, {
                "method": "GET"
            }).then(response => response.json())
                .then(response => {
                    var data = [];
                    if (response) {
                        for (var i = 0; i < response.length; i++) {
                            data.push({
                                "id":response[i].id,
                                "name":response[i].title.rendered || '',
                                "img":response[i]._embedded['wp:featuredmedia'][0].source_url || '',
								"content":response[i].content.rendered || '',
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