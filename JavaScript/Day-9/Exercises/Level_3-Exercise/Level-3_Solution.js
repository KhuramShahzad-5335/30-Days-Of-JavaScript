//=============================         4           =======================
//*** Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object. Check the output below.


const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];


const statistics = {
    ages : ages,

    count : function(){
        return this.ages.length;
    },

    sum : function(){
        const sum = this.ages.reduce((sum, n) => { return sum + n });
        return sum;
    },

    min : function(){
        // firstly lets sort the array and the pick first element as smallest.
        this.ages.sort(function(a,b) {return a - b});
        return this.ages[0];
    },

    max: function(){
        //again sort the array,
        this.ages.sort((a,b) => a - b);
        return this.ages[ages.length - 1];
    },

    range : function(){
        return this.max() - this.min();
    },

    mean : function(){
       let mean = this.sum() / this.count()
       return Math.round(mean);
    },

    median : function(){
        let mid = Math.floor(this.count()/2);
        if(this.count()/2 === 0){
            return (this.ages[mid - 1] + 1 + this.ages[mid])/2; 
        }
        else{
            return this.ages[mid];
        }
    },

    mode: function(){
        let frequency = {};
        let mode = 0;
        let maxCount = 0;

        // loop through the whole array, to check em all u,know :)
        for (const num of this.ages) {
            
            // we should start counting from first element naw, i will be adding that to the object so,
            frequency[num] = (frequency[num] || 0 ) + 1;   // it will increment on if the sum is there, else, for new number it will restart counter for the new number.
            
            // now we should check if numbers are same, then keep those counts and numbers to get mode
            if(frequency[num] > maxCount){
                maxCount = frequency[num];       // it will keep the num we most repetitions count.
                mode = num;                      // and most repeted number is our mode.
            }
        }
        return {
            'mode' : mode,
            'count' : maxCount,
        }
    },

    variance : function(){
        let mean = this.mean();
        const variance = this.ages.reduce(
            function(accumulated, val){
                return accumulated + (val - mean) ** 2
            }
        ,0)/this.ages.length;
        return variance;
    },
    
    std : function(){
        return Math.round(Math.sqrt(this.variance()))
    },

    freqDist : function(){
        
        let count = 0;
        let frequency = {};
        let arr = [];

        // loop through the array, to do what we want
        for (const num of this.ages) {
            // start counting the frequency
                frequency[num] = (frequency[num] || 0) + 1;
        }
        return frequency
    },
}

statistics['describe'] = function(){
    for (let key in this) {
        if(typeof this[key] == 'function' && key != 'describe'){
            console.log(key, ': ', this[key]());
        }
    }
}

statistics.describe();
