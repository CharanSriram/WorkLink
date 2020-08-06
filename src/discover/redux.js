import { createStore } from 'redux'

// Actions
export function createWorkers(searchItem) {
    return {
        type: 'GET_WORKERS_FROM_DB',
        searchItem
    }
}

// Helpers
function populateHelper(searchTerm) {
    let temp = []
    // pull stuff from the database here using the searchTerm

    temp.push(
        {
            name: "John Smith",
            ratings: [7, 8, 9, 8],
            homeowners: [
                {
                    name: "Chad",
                    lat: 33.171136,
                    lng:  -96.743538,
                    netRating: 34
                }
            ],
            job: "Yard Work",
            quote: "Quick and Reliable Work"
        },
        {
            name: "Sam White",
            ratings: [6, 8, 8, 6],
            homeowners: [
                {
                    name: "Charlie",
                    lat: 33.171136,
                    lng:  -96.743538,
                    netRating: 36
                },
                {
                    name: "Anand",
                    lat: 33.171136,
                    lng:  -96.743538,
                    netRating: 38
                }
            ],
            job: "Yard Work",
            quote: "The best worker around"
        },
        {
            name: "Ryan Wilson",
            ratings: [8, 10, 6, 7],
            homeowners: [
                {
                    name: "Keanu",
                    lat: 33.171136,
                    lng:  -96.743538,
                    netRating: 30
                },{
                    name: "Dwayne",
                    lat: 33.171136,
                    lng:  -96.743538,
                    netRating: 38
                },{
                    name: "Alfred",
                    lat: 33.171136,
                    lng:  -96.743538,
                    netRating: 33
                }
            ],
            job: "Yard Work",
            quote: "20 years of experience"
        },
        {
            name: "Talor McKinney",
            ratings: [6, 5, 10, 10],
            homeowners: [
                {
                    name: "Dwayne",
                    lat: 33.171136,
                    lng:  -96.743538,
                    netRating: 40
                },{
                    name: "Hugh",
                    lat: 33.171136,
                    lng:  -96.743538,
                    netRating: 39
                },{
                    name: "Samantha",
                    lat: 33.171136,
                    lng:  -96.743538,
                    netRating: 39
                },{
                    name: "Charles",
                    lat: 33.171136,
                    lng:  -96.743538,
                    netRating: 35
                }
            ],
            job: "Yard Work",
            quote: "Passionate and ready to work!"
        },
    )

    return temp;
}

// Reducer
function workerList(state = [], action) {
    switch(action.type) {
        case 'GET_WORKERS_FROM_DB':
            return populateHelper(action.searchTerm)
        default:
            return []
    }
}

// Store init
let store = createStore(workerList)
export default store;

