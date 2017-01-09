 function PostBrandAction ({http, path, state}) {
	let data = state.get('new_brand.formBrand')
	return http.post('/api/v1/brand',{
		name:data.name.value,
		short_name:data.shortName.value,
		description:data.description.value,
		url:data.url.value
	})
	// All status codes between 200 - 300, including 200
	.then((response) => {
		console.log(response)
	})
	// All other status codes
	.catch((response) => {
		console.log(response)
	})
}
export default PostBrandAction
