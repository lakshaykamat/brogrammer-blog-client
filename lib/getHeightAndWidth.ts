import probe from 'probe-image-size'
export const getHeightAndWidth = async(url:string)=>{
    const size = await probe(url)

    return size
}