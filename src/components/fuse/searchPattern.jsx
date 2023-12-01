import Fuse from 'fuse.js'

function searchArray(array,searchPattern) {
  

    if (searchPattern.trim() === '') {
        return array;
    }
    if (!array) {
        return array;
    }

    const fuseOptions = {

        keys: [
            "title"
        ]
    };
    
    const fuse = new Fuse(array, fuseOptions);
    
   
    return fuse.search(searchPattern)
    return array

}

export default searchArray