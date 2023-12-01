import Fuse from 'fuse.js'

function searchArray(array,searchPattern) {
  

    if (searchPattern.trim() === '') {
        return array;
    }
    if (!array) {
        return array;
    }

    const fuseOptions = {
        // isCaseSensitive: false,
        // includeScore: false,
        // shouldSort: true,
        // includeMatches: false,
        // findAllMatches: false,
        // minMatchCharLength: 1,
        // location: 0,
        // threshold: 0.6,
        // distance: 100,
        // useExtendedSearch: false,
        // ignoreLocation: false,
        // ignoreFieldNorm: false,
        // fieldNormWeight: 1,
        keys: [
            "title"
        ]
    };
    
    const fuse = new Fuse(array, fuseOptions);
    
    // Change the pattern
    // const searchPattern = ""
    console.log(searchPattern)
    console.log(fuse.search(searchPattern))
    return fuse.search(searchPattern)
    return array

}

export default searchArray