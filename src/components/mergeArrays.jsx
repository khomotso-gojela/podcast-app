

export default function mergeArrays(array1,array2) {

let newArray = array1.map(od => {
    let same = od
    array2.map(ev => {
        if (ev.num == od.num){
            same = ev
        }
    })
    return same
})

return newArray

}