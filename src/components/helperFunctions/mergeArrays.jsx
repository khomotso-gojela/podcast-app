

export default function mergeArrays(array1,array2) {
console.log('array1:',array1)
console.log('array2:',array2)



let newArray = array1.map(norm => {
    let same = norm

    array2.map(fav => {
        if (fav.id == norm.id){
            same = fav
        }
    })

    return same
})

// console.log('merged:',newArray)
return newArray

}