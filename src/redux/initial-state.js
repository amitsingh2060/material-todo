export const initialState = JSON.parse(window.localStorage.getItem("om"))|| {
    todos: [
        {
            id:0,
            title:"Buy Milk",
            completed:false,
            important:false,
        },
        {
            id:2,
            title:"Tea Milk",
            completed:true,
            important:false,
        },
        {
            id:3,
            title:"coffeee Milk",
            completed:false,
            important:true,
        },
        {
            id:4,
            title:"To get job",
            completed:false,
            important:true,
        },
        {
            id:5,
            title:"Software Engin.",
            completed:false,
            important:true,
        },
    ]
};