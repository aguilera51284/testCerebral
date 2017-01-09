import RefreshToken from '../modules/home/actions/RefreshTokenAction'
function CapiFactory(method, url, paths) {
	console.log(paths)
	function Request({http, path}) {
		console.log(path) // Null
		return http.post(url,{
                name:"Arturo"
            })
            .then(response => {
                console.log(response)
                // Depending on response.status you can trigger different paths

                return path.success()
            })
            .catch(error => {
            	return path.error({error})
            })

	}
	return [
		Request, Object.assign({
			expired: [RefreshToken]
		}, paths)
	]

}
export default CapiFactory

