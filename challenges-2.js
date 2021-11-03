// ================================================================

// Titanic Dataset challenges! 

// Your goal is to write some functions that will extract
// relevant data from the dataset. 

// Write your code here in this file. 

// *************************************
// Test your code by running: `npm test`
// *************************************

// Each of the functions below expects to receive the Titanic data
// as the parameter data. Your goal is to extract the relevant 
// piece of information from the data and return it. 

// ===============================================================

// ---------------------------------------------------------------
// 1 -------------------------------------------------------------
// Return an array of all the values in data for a given property
// For example if property = 'fare' the output should be a list of 
// all fares something like: [7.3125, 15.75, 7.775, 10.5, ...]
// Or if property = 'age' -> [40, 26, 22, 28, 23, 45, 21, ...]

const getAllValuesForProperty = (data, property) => {
	const newArr = data.map(data => data.fields)
	const filter = newArr.map(data =>{
		if(property === 'fare'){
			return data.fare
		}
		if(property === 'age'){
			return data.age
		}
		if(property === 'pclass'){
			return data.pclass
		}
		if(property === 'embarked'){
			return data.embarked 
		}
	})
	return filter
}

// 2 -------------------------------------------------------------
// Return an array where a given property matches the given value
// For example property = 'sex' and value = 'male' returns an 
// array of all the male passengers [{...}, {...}, {...}, ...]

const filterByProperty = (data, property, value) => {

	const filter = data.filter(data => data.fields.sex === value)
	return filter
}

// 3 -------------------------------------------------------------
// Filter out missing or null values
// Return an array where the objects that have undefined for a 
// given property have been removed

const filterNullForProperty = (data, property) => {
	let returnArr = null
	if(property === 'fare'){
		returnArr= data.filter(p => p.fields.fare !== undefined)
	}
	if(property === 'age'){
		returnArr= data.filter(p => p.fields.age !== undefined)
	}
	if(property === 'pclass'){
		returnArr= data.filter(p => p.fields.pclass !== undefined)
	}
	if(property === 'embarked'){
		returnArr= data.filter(p => p.fields.embarked !== undefined)
	}
	return returnArr
}

// 4 -------------------------------------------------------------
// Abstract the sum by creating a function that returns the sum 
// for any (numeric) property
// Return the total of all values for a given property. This

const sumAllProperty = (data, property) => {
	let sum = 0
	if (property === 'age') {
		sum = data.reduce((acc, p) => p.fields.age !== undefined ? acc + p.fields.age : acc, 0)
	} else {
		sum = data.reduce((acc, p) => p.fields.fare !== undefined ? acc + p.fields.fare : acc, 0)

	}
	return sum
}


// 5 -------------------------------------------------------------
// Count unique values for property. The goal here is return an 
// object with keys equal to the unique values for a property and
// values equal to the number of times that property appears. For
// example the embarked property has three unique values: S, C, 
// and Q, and a couple passengers have undefined for this property. 
// So the output should be: { S: 644, C: 168, Q: 77, undefined: 2 }
// That is 644 passengers embarked at South Hampton. 168 embarked 
// at Cherbourg, 77 emabrked at Queenstown, and 2 are undedfined

const countAllProperty = (data, property) => {
	let counts = null
	if (property === 'embarked'){
		counts = data.reduce((acc, p) => {
			if (acc[p.fields.embarked] === undefined) {
				acc[p.fields.embarked] = 1
			} else {
				acc[p.fields.embarked] += 1
			}
			return acc
		}, {})
	}
	if (property === 'sex'){
		counts = data.reduce((acc, p) => {
			if (acc[p.fields.sex] === undefined) {
				acc[p.fields.sex] = 1
			} else {
				acc[p.fields.sex] += 1
			}
			return acc
		}, {})
	}
	if (property === 'pclass'){
		counts = data.reduce((acc, p) => {
			if (acc[p.fields.pclass] === undefined) {
				acc[p.fields.pclass] = 1
			} else {
				acc[p.fields.pclass] += 1
			}
			return acc
		}, {})
	}
	return counts
}


// 6 ------------------------------------------------------------
// Make histogram. The goal is to return an array with values 
// of a properties divided into buckets and counting the number
// of items in each bucket.

const makeHistogram = (data, property, step) => {
	let histogram = null
	if (property === 'age') {
		histogram = data.filter(p => p.fields.age !== undefined).reduce((acc, p) => {
			if (acc[Math.floor(p.fields.age / step)] === undefined) {
				acc[Math.floor(p.fields.age / step)] = 1
			} else {
				acc[Math.floor(p.fields.age / step)] += 1
			}
			return acc
		}, [])
	}
	if (property === 'fare') {
		histogram = data.filter(p => p.fields.fare !== undefined).reduce((acc, p) => {
			if (acc[Math.floor(p.fields.fare / step)] === undefined) {
				acc[Math.floor(p.fields.fare / step)] = 1
			} else {
				acc[Math.floor(p.fields.fare / step)] += 1
			}
			return acc
		}, [])
	}

	return histogram
}

// 7 ------------------------------------------------------------
// normalizeProperty takes data and a property and returns an 
// array of normalized values. To normalize the values you need
// to divide each value by the maximum value in the array.

const normalizeProperty = (data, property) => {
	let normalizedValues = null
	if (property === 'age') {
		const ages = data.filter(p => p.fields.age !== undefined).map(p => p.fields.age)
		const maxAge = Math.max(...ages)
		normalizedValues = ages.map(v => v / maxAge)
	}
	if (property === 'fare') {
		const fares = data.map(p => p.fields.fare)
		const maxFare = Math.max(...fares)
		normalizedValues = fares.map(v => v / maxFare)
		
	}
	return normalizedValues
}

// 8 ------------------------------------------------------------
// Write a function that gets all unique values for a property. 
// Given the array of data and a property string it should return
// an array of all of the unique values under that property. 
// For example if the property string were "sex" this function 
// would return ['male', 'female']

const getUniqueValues = (data, property) => {
	let values = null
	if(property === 'sex'){
		values = Object.values(data.fields.sex)
	}
	if(property === 'pclass'){
		const newArr = data.filter(p => p.fields.pclass !== undefined)
		values = Object.values(newArr.fields.pclass)
	}
	if(property === 'embarked'){
		values = Object.values(data.fields.embarked)
	}
	if(property === 'survived'){
		values = Object.values(data.fields.survived)
	}
}

// --------------------------------------------------------------
// --------------------------------------------------------------
module.exports = {
	getAllValuesForProperty,
	filterByProperty,
	filterNullForProperty,
	sumAllProperty,
	countAllProperty,
	makeHistogram,
	normalizeProperty,
	getUniqueValues
}