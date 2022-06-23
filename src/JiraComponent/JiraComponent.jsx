import  React from 'react';
import classes from  "./Jira.module.css"

const JiraComponent =(props)=>{


const[tickets,setTickets] = React.useState(props.tickets)

function changeStatus (number,status){
    if(status === 'to do') {
        setTickets([...tickets, tickets[number - 1].status = 'In Progress'])
        setTickets([...tickets])
    }
    if(status === 'In Progress'){
        setTickets([...tickets, tickets[number - 1].status = 'Done'])
        setTickets([...tickets])
    }
}
  React.useEffect(()=>{
    setTickets(Object.values(props.tickets))
  },[props])
    let randomColor = ()=>{
        let names = ['blue','green','yellow','red','orange','violet','brown','pink'];
        function numberOfColor (min,max) {
            return Math.floor(Math.random()*(max-min+1)+min)
        }
        return names[numberOfColor(0,7)]
    }
let allTickets = tickets.map((ticket)=>{

    let idNumber  = ticket.id
    let status = ticket.status
    return(<div key={ticket.title.toString()}  className={classes.ticketStyle}>
        <div className={classes.user} style={{backgroundColor:randomColor()}}>{ticket.name.charAt(0) } {ticket.surname.charAt(0)}</div>
        <div className={classes.ticketItem}>{ticket.id}</div>
        <div className={classes.ticketItem}>{ticket.title}</div>
        <div onClick={()=>changeStatus(idNumber,status)} className={classes.ticketItem}>{ticket.status}</div>
    </div>)
})

    const [ticketsTodo,setTicketsTodo]=React.useState([])
    React.useEffect(()=>{
        let ticketsTodo = [];
        tickets.map((ticket)=>{
            if(ticket.status === "to do"){
                ticketsTodo.push(ticket)
            }
        })
        setTicketsTodo(ticketsTodo)
    },[tickets])
    const [ticketsProgress,setTicketsProgress]=React.useState([])
    React.useEffect(()=>{
     let ticketsProgress = [];
     tickets.map((ticket)=>{
         if(ticket.status === "In Progress"){
             ticketsProgress.push(ticket)
         }
     })
     setTicketsProgress(ticketsProgress)
 },[tickets])
    const [ticketsDone,setTicketsDone]=React.useState([])
    React.useEffect(()=>{
        let ticketsDone = [];
        tickets.map((ticket)=>{
            if(ticket.status === 'Done'){
                ticketsDone.push(ticket)
            }
        })
        setTicketsDone(ticketsDone)
    },[tickets])
    return(
<div>
           <div className={classes.container}>
               {allTickets}
               <div className={classes.boardContainer}>
                   <div className={classes.boardItem}>
                         <h2>To Do</h2>
                       {ticketsTodo.map((ticket ,index)=>{
                           let idNumber = ticket.id
                           let status = ticket.status
                           return(
                               <div key={ticket.title.toString()} className={classes.progressItem}>
                                   <div   className={classes.user} style={{backgroundColor:randomColor()}}>{ticket.name.charAt(0) } {ticket.surname.charAt(0)}</div>
                                   <div  className={classes.ticketItem}>{ticket.id}</div>
                                   <div  onClick={()=>changeStatus(idNumber,status)} className={classes.ticketItem}>{ticket.status}</div>
                               </div>
                           )
                       })}
                   </div>
                   <div className={classes.boardItem}>
                       <h2>In progress </h2>
                       {ticketsProgress.map((ticket,index)=>{
                           let idNumber = ticket.id
                           let status = ticket.status
                                  return(
                                      <div  key={ticket.title.toString()+"er"}  className={classes.progressItem}>
                                          <div  className={classes.user} style={{backgroundColor:randomColor()}}>{ticket.name.charAt(0) } {ticket.surname.charAt(0)}</div>
                                          <div  className={classes.ticketItem}>{ticket.id}</div>
                                          <div  onClick={()=>changeStatus(idNumber,status)} className={classes.ticketItem}>{ticket.status}</div>
                                      </div>
                       )
                       })}
                   </div>
                   <div className={classes.boardItem}>
                       <h2>Done</h2>
                       {ticketsDone.map((ticket,index)=>{
                           let idNumber = ticket.id
                           let status = ticket.status
                           return(
                               <div key={ticket.title.toString()+"eqqqr"} className={classes.progressItem}>
                                   <div  className={classes.user} style={{backgroundColor:randomColor()}}>{ticket.name.charAt(0) } {ticket.surname.charAt(0)}</div>
                                   <div  className={classes.ticketItem}>{ticket.id}</div>
                                   <div onClick={()=>changeStatus(idNumber,status)} className={classes.ticketItem}>{ticket.status}</div>
                               </div>
                           )
                       })}
                   </div>
               </div>
           </div>

</div>
    )

}
export default JiraComponent;