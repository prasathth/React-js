import React from 'react';
import axios from 'axios';
import User from './user.js';
export default class UserDetail extends React.Component{
    constructor(){
        super();
        //console.log(this.props.match);
        this.state={
            users:[]
        }
        //console.log(this.state.id);

    }
    componentDidMount(){
        console.log(`Component is mounted on the DOM`);
        
        const id=this.props.match.params.id
        console.log(id)
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => this.setState({
            users : res.data
        })
        )
        console.log(this.state.users);
    }
    
    render(){
    
        return(
            <div className="row">
            {
                
                <div className="col-md-3">
                    <User id={this.state.users.id} title={this.state.users.name} body={this.state.users.email} />
                </div>
            }
            </div>
        )
    }
}