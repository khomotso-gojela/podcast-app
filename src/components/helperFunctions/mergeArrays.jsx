

export default function mergeArrays(array1,array2) {
// console.log('array1:',array1)
// console.log('array2:',array2)

let newArray = array1.map(od => {
    let same = od
    array2.map(ev => {
        if (ev.id == od.id){
            same = ev
        }
    })
    return same
})

// console.log('newArray:',newArray)
return newArray

}