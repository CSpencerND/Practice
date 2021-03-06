const apiKey =
    "KS_GefeW5cJsJKGrBbTbyyw3OylSJE7NbT5SVcWhFQGNh383H7KVZG57n-Nc5JEd5KxFxuwPnNQtgmadpIbI0SUa7bOgOOZxZ8DYSSt_B5ZD5z9qaq3f45sYRDXaYnYx"

const Yelp = {
    search(term, location, sortBy) {
        return fetch(
            `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
            {
                headers: {
                    Authorization: `Bearer ${apiKey}`,
                },
            }
        )
            .then((response) => response.json())
            .then((jsonResponse) => {
                console.log(jsonResponse)
                if ("businesses" in jsonResponse) {
                    return jsonResponse.businesses.map((business) => {
                        return {
                            id: business.id,
                            imageSrc: business.image_url,
                            name: business.name,
                            address: business.location.address1,
                            city: business.location.city,
                            state: business.location.state,
                            zipCode: business.location.zip_code,
                            category: business.categories.alias,
                            rating: business.rating,
                            reviewCount: business.review_count,
                        }
                    })
                }
            })
    },
}

export default Yelp
