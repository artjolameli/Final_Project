import React,{Component} from 'react';
import './App.css';
import Particles from 'react-particles-js';
import { Link } from 'react-router-dom';
import Home from './components/Home'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import {BrowserRouter as Router,Redirect} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

const particleOpt = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
     activities : []
    }
  }

  componentDidMount(){
    console.log('COMPONENT HAS MOUNTED')
    fetch('http://localhost:3000/activities')
    .then(function(response){
      response.json()
      .then(function(activities_data){
      console.log(activities_data)
      })
    })
  }


////////////////////////BROOKLYN////////////////////
  updateNameBrooklyn = (event ) =>{
    //console.log("Brooklyn ")
    //event.preventDefault();
    let activities_data = {
      name: 'Brooklyn'
    };
    var request = new Request('http://localhost:3000/activities',{
    method:'POST', 
    headers : new Headers ({ 'Content-Type': 'application/json'}),
    body :JSON.stringify(activities_data)
    });
    fetch(request)
    .then(function(response){
      //console.log('hello')
      response.json()
      .then(function(activities_data){
      console.log(activities_data)
      })
    })
    .catch(function(err){
      console.log(err)
    })
      }

      ////////////////////////BRONX////////////////////
  updateNameBronx = (event ) =>{
    
    //event.preventDefault();
    let activities_data = {
      name: 'Bronx'
    };
    var request = new Request('http://localhost:3000/activities',{
    method:'POST', 
    headers : new Headers ({ 'Content-Type': 'application/json'}),
    body :JSON.stringify(activities_data)
    });
    fetch(request)
    .then(function(response){
      //console.log('hello')
      response.json()
      .then(function(activities_data){
      console.log(activities_data)
      })
    })
    .catch(function(err){
      console.log(err)
    })
      }
            ////////////////////////MNHATTAN////////////////////
  updateNameManhattan = (event ) =>{
    
    //event.preventDefault();
    let activities_data = {
      name: 'Manhattan'
    };
    var request = new Request('http://localhost:3000/activities',{
    method:'POST', 
    headers : new Headers ({ 'Content-Type': 'application/json'}),
    body :JSON.stringify(activities_data)
    });
    fetch(request)
    .then(function(response){
      //console.log('hello')
      response.json()
      .then(function(activities_data){
      console.log(activities_data)
      })
    })
    .catch(function(err){
      console.log(err)
    })
      }
                  ////////////////////////STATEN ISLAND////////////////////
  updateNameStatenIsland = (event ) =>{
    
    //event.preventDefault();
    let activities_data = {
      name: 'Staten Island'
    };
    var request = new Request('http://localhost:3000/activities',{
    method:'POST', 
    headers : new Headers ({ 'Content-Type': 'application/json'}),
    body :JSON.stringify(activities_data)
    });
    fetch(request)
    .then(function(response){
      //console.log('hello')
      response.json()
      .then(function(activities_data){
      console.log(activities_data)
      })
    })
    .catch(function(err){
      console.log(err)
    })
      }

                  ////////////////////////QUEENS////////////////////
  updateNameQueens = (event ) =>{
    
    //event.preventDefault();
    let activities_data = {
      name: 'Queens'
    };
    var request = new Request('http://localhost:3000/activities',{
    method:'POST', 
    headers : new Headers ({ 'Content-Type': 'application/json'}),
    body :JSON.stringify(activities_data)
    });
    fetch(request)
    .then(function(response){
      //console.log('hello')
      response.json()
      .then(function(activities_data){
      console.log(activities_data)
      })
    })
    .catch(function(err){
      console.log(err)
    })
      }

  
  render(){
    let activities = this.state.activities;
    return (
    <div>
   
    
        
      <Header className="header-color" title={<Link style={{textDecoration: 'none',color:'black' }} to="/">Sports Finder</Link>} scroll>
      {/* <img className= "Logo" src={require('./soccer.jpeg')}/>

      <img className= "pimp" src={require('./giphy.webp')}/>
      <img className= "ball" src={require('./basketball.webp')}/> */}


      </Header>

<div className= "nav-bar">
       <Navigation >

      <Link className ="Home" to="/City"> <a>Find your locations here </a></Link>
      
      <Link className ="City" to="/Home">Home</Link>
      
   <Content>

        
            <div className="page-content" />
            
            <Main/>
            
          <div/>
          
        </Content>

     
      </Navigation>
      </div >
     
       
     
    
    

<Particles 

         params={particleOpt} />
         
          <div class="container">
              <ul>
            <button type="button" class=" btn-md" onClick = {this.updateNameBrooklyn.bind(this)} >Brooklyn</button>
              <button type="button" class=" btn-md" onClick = {this.updateNameBronx.bind(this)}>Bronx</button>
              <button type="button" class=" btn-md" onClick = {this.updateNameManhattan.bind(this)}>Manhattan</button>
              <button type="button" class=" btn-md" onClick = {this.updateNameStatenIsland.bind(this)}>Staten Island</button>
              <button type="button" class=" btn-md" onClick = {this.updateNameQueens.bind(this)}>Queens</button>

              </ul>
              <ul>
            {activities.map(activities =>activities.name)}
             </ul>
            </div>
         
         
         

    </div>
    
    
   
  );
}

}

export default App;