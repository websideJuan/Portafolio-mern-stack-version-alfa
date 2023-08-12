export default async function fetchingData () {
    try {
        const result = await fetch('../src/data/skillsets.json')
        const data = await result.json()
         
        return data.skillsets
    } catch (error) {
        console.log(error)
    } finally {
        console.log('hola mundo')
    }
}