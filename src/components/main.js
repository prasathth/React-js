import React from 'react';
//import Card from './card.js';
import '../App.css';
import axios from 'axios';
import User from './user.js';

export default class Main extends React.Component {

    constructor(){
        super();
        console.log(`called from the constructor of Main component..`);
        this.state={
            phone : [
                {
                    name:"IPhone X",
                    desc:"good speed"
                },
                {
                    name:"samsung",
                    desc:"good battery"
                },
                {
                    name:"redmi",
                    desc:"good battery"
                },
                {
                    name:"samsung",
                    desc:"good battery"
                },
                {
                    name:"sony",
                    desc:"good battery"
                }
            ]
        ,mobiles : [
                {
                    name:"IPhone X",
                    desc:"good speed"
                },
                {
                    name:"samsung",
                    desc:"good battery"
                },
                {
                    name:"redmi",
                    desc:"good battery"
                },
                {
                    name:"samsung",
                    desc:"good battery"
                },
                {
                    name:"sony",
                    desc:"good battery"
                }
            ],users : [

            ]
        }

        this.selectedProduct = this.selectedProduct.bind(this);
    }

    selectedProduct({title, body}){

        //const list = this.state.phone.filter(phon=>phon.name !== title);
        console.log(title);
        console.log(body);
        //this.setState({
        //    mobiles:list
        //})
    }

    showUser(u)
    {
        console.log(u);
        
    }
    componentDidMount(){
        console.log(`Component is mounted on the DOM`);

        axios.get("https://jsonplaceholder.typicode.com/users").then(res => this.setState({
            users : res.data
        })
        )
    }

    render(){
    
        return (
            /*
            <div className="row">
            {
                this.state.mobiles.map((phon,index)=>
                <div className="col-md-3" key={index}>
                    <Card key={index} title={phon.name} body={phon.desc} selected = {this.selectedProduct}/>
                </div>)
            }
            </div>
            */
            <div className="row">
            {
                this.state.users.map((phon,index)=>
                <div className="col-md-3" key={index}>
                    <User key={index} id={phon.id} title={phon.name} body={phon.email} selected = {this.showUser}/>
                </div>)
            }
            </div>
        );
    }
}
