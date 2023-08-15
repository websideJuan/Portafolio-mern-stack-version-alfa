export default async function fetchingData () {
    try {
        const result = await fetch('./src/data/skillsets.json')
        const data = await result.json()
         
        return data
    } catch (error) {
        console.log(error.message)
    } finally {
        console.log('hola mundo')
    }
}