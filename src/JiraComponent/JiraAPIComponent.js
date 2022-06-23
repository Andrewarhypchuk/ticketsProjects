import React from 'react';
import axios from "axios";
import JiraComponent from "./JiraComponent";


const JiraAPIComponent =(props)=>{
    if(props.tickets.tickets.tickets.length === 1){
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(response=>{
                return response.data
            }).then( response2 => {
            let randomNameTicket = ()=>{
                let names = ['Kevin','Bob','Mark','Andrew','Ira','Victor','Max','David'];
                function numberOfName (min,max) {
                    return Math.floor(Math.random()*(max-min+1)+min)
                }
                return names[numberOfName(0,7)]
            }
            let randomSurnameTicket = ()=>{
                let surnames = ['Graham','Plains','Bauch','Lebsack','Dietrich','Weissnat','Runolfsdottir','Reichert'];
                function numberOfSurName (min,max) {
                    return Math.floor(Math.random()*(max-min+1)+min)
                }
                return surnames[numberOfSurName(0,7)]
            }
            let preTickets = Object.values(response2).splice(0,20);
            let tickets = [];
            let editTickets = preTickets.map((ticket)=>{
                tickets.push({
                    id:ticket.id,
                    name:randomNameTicket(),
                    surname:randomSurnameTicket(),
                    title:ticket.title,
                    status:'to do'

                })
            });

           props.setTickets(tickets)
        })
    }

    return(
       <JiraComponent tickets={Object.values(props.tickets.tickets.tickets)} />
    )
}
export default JiraAPIComponent;