module.exports = (client) => {
    return (request, response) => {
        response.json({message: 'it works'})
    }
}
