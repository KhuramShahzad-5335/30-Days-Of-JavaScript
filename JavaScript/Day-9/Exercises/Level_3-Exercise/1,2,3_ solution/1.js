// sort the countries by name by capital and by population

// solution.
// i will sort separately.

// this one is sort by name.
function sortByName(arr){
    const sorted = arr.sort(
        function(a,b){
            if(a.name < b.name){
                return -1;
            }
            if(a.name > b.name){
                return 1;
            }
            return 0;
        }
    );
    return sorted;
}




// this one is sorted by capital name.

function sortedByCapital(arr){
    const sorted = arr.sort(
        function(a,b){
            if(a.capital > b.capital){
                return 1;
            }
            if(a.capital < b.capital){
                return -1;
            }
            return 0;
        }
    );
    return sorted;
}


// this one is sorted by the population.
function sortedByPopulation(arr){
    const sorted = arr.sort(
        function(a,b) {
            if(a.population < b.population){
                return 1;
            }
            if(a.population > b.population){
                return -1;
            }
            return 0;
        }
    );
    return sorted;
}




console.log(sortedByPopulation(countries))