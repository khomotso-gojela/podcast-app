
// ✅ User can arrange the list of shows by title from A-Z

// ✅ User can arrange the list of shows by title from Z-A

// ✅ User can arrange the list of shows by date updated in ascending order

// ✅ User can arrange the list of shows by date updated in descending order

// ✅ User can filter shows by title through a text input

// ✅ User can find shows based on fuzzy matching of strings (you can use something like https://fusejs.io/)

// ✅ Automatically filter shows by genre if the genre label is clicked on

export default function sortArray(Array, sort) {
    
    const newArray = Array    
    
    switch(sort){
        case 'none':
            return newArray

        case 'A-Z':
            newArray.sort((a, b) => {
                // Convert names to lowercase for case-insensitive sorting
                const nameA = a.title.toLowerCase();
                const nameB = b.title.toLowerCase();
              
                // Compare names
                if (nameA < nameB) return -1;
                if (nameA > nameB) return 1;
                return 0;
            });
            
            console.log(newArray);
            return newArray

        case 'Z-A':
            newArray.sort((a, b) => {
                // Convert names to lowercase for case-insensitive sorting
                const nameA = a.title.toLowerCase();
                const nameB = b.title.toLowerCase();
              
                // Compare names
                if (nameA < nameB) return 1;
                if (nameA > nameB) return -1;
                return 0;
            });
            
            console.log(newArray);
            return newArray
        
        case 'oldest':
            newArray.sort((a, b) => new Date(a.updated) - new Date(b.updated));

            console.log(newArray);
            return newArray

        case 'latest':
            newArray.sort((a, b) => new Date(b.updated) - new Date(a.updated));

            console.log(newArray);
            return newArray

        default:
            return Array
    }

}