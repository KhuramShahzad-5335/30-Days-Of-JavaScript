class Statistics{
    constructor(ages){
        this.ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
    }

    // Now create the methods.
    count(){
        return this.ages.length;
    }

    min(){
        return Math.min(...this.ages);
    }

    max(){
        return Math.max(...this.ages);
    }

    sum(){
        let sum = 0;
        for (const n of this.ages) {
            sum += n;
        }
        return sum;
    }

    range(){
        // max value - min value so,
        return this.max() - this.min();
    }

    mean(){
        // sum of all elements / number of elements
        return Math.floor(this.sum() / this.count());
    }

    median(){
        // step 1 sort the array in ascending order
        const sortedArr = this.ages.sort((a, b) => a - b);
        
        // step 2 find mid index.
        const midIndex = Math.floor(sortedArr.length / 2);

        // now if length is even, and odd checking and return accordingly.
        if(sortedArr.length % 2 === 0){
            return (sortedArr[sortedArr.length - 1] + sortedArr[midIndex]) / 2;
        }
        else{
            return sortedArr[midIndex]
        }
    }

    mode(){
        // mode is we have to tell most occured element and its frequency.
        let maxFreq = 0;
        let mode = null;
        let frequency = {};

        // loop through all the array
        this.ages.forEach(age => {
            if(frequency[age]){
                frequency[age] ++;
            }
            else{
                frequency[age] = 1;
            }
        });

        // now get the mode and its frequency
        for (const age in frequency) {
            if(frequency[age] > maxFreq){
                maxFreq = frequency[age];
                mode = age;
            }
        }

        const res = {};
        res['Mode'] = mode;
        res['Count'] = maxFreq;

        return res;
    }

    variance(){
        let mean = this.mean();
        
        const variance = this.ages.reduce(
            function(accumulated, val){
                return accumulated + (val - mean) ** 2
            }
        ,0)/this.ages.length;

        return variance;
    }

    standardDeviation(){
        // it is square root of variance.
        return Math.round(Math.sqrt(this.variance()));
    }

    frequencyDistribution(){
        // we have to return each value and its frequency.
        let freqDist = {};
        
        this.ages.reduce(
            function(acc, val){
                return freqDist[val] = (freqDist[val] | 0 ) + 1
            }
        , {});
        
        const res = Object.entries(freqDist).map (
            function([num, freq]){
                return [num, parseFloat(freq) * 4.0]
            }
        )
        return res;
    }

    describe(){
        const res = {};
        let keys = [
            'Count :',
            'Min : ',
            'Max : ',
            'Sum : ',
            'Range : ',
            'Mean : ',
            'Median: ',
            'Mode : ',
            'Variance : ',
            'STD : ',
            'FreqDist : '
        ];

        let values = [
            this.count(),
            this.min(),
            this.max(),
            this.sum(),
            this.range(),
            this.mean(),
            this.median(),
            this.mode(),
            this.variance(),
            this.standardDeviation(),
            this.frequencyDistribution()
        ];
        for(let i = 0; i < keys.length; i ++){
            res[keys[i]] = values[i];
        }
        return res;
    }
}

const statistics = new Statistics();

console.log('Counts :',statistics.describe());