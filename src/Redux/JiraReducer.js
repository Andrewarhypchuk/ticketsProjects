
const SET_TICKETS = "SET-TICKETS";
let initialState = {
    tickets:[{
        id: '1',
        name: 'Andrew',
        surname: "Arkhypchuk",
        title:'blablabla',
        status: 'to do'
    }
    ]
}

const JiraReducer = (state=initialState, action)=>{
        switch (action.type) {
            case SET_TICKETS:
        return {
            ...state,"tickets": { ...state.tickets, ...action.tickets }
        }
default: return state;
}
}
export const setTicketsAC = (tickets)=>({type:SET_TICKETS,tickets});
export default JiraReducer;