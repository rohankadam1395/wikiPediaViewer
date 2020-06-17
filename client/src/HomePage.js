import React from 'react';
import './HomePage.css';
import axios from 'axios';
class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
text:[],
        }
    }
    componentDidMount(){
        this.getData();
    }
getData(){
    axios
    .get("/api")
    .then(data=>{
        console.log(data.data.data);
        this.setState({
            text:data.data.data,
        })
    })
    
}
    render(){
        return(
            <div id="home">
            <p>This is Home Page</p>
        {this.state.text.map((data,index)=>{
            return <div >{data}</div>;
        })}
        </div>
        );
    }
}

export default Home;