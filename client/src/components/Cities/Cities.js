import React, { Component } from 'react';

class Cities extends Component {
   constructor(props) {
       super(props);
       this.state = {
           items:[],
           isLoaded: false
       }
   }
   componentDidMount() {
       fetch("http://localhost:5000/api/cities")
           .then(res => res.json())
           .then(items => {
               console.log(items);
                this.setState({
                   items,
                   isLoaded: true
               }) 
               console.log(this.state.items)
       })
   }
   render() {
        const items = this.state.items;
       const isLoaded = this.state.isLoaded;
       console.log(this.state.items) 
       console.log(this.state.isLoaded)
           if (!isLoaded) {
           return <div>Loading cities...</div>
       }
       else{
           return (
               <div className="App">
                   <div>
                       {items.map(item => (
                           <h2 key={item._id}>
                               City: {item.name} |
                               Foto: {item.img} | 
                              Country: {item.country}
                           </h2>
                       ))}
                   </div>
               </div>
           );
       } 
   }
}
export default Cities;
