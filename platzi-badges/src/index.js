import React from 'react';
import ReactDOM from 'react-dom';
import './Global.css';
import Badge from '../src/components/Badge'
import 'bootstrap/dist/css/bootstrap.css'
// const element =<h1>Rafa</h1>; = const element = React.createElement('h1',{},'Rafa children') el segundo parametro son los props, o properties
// const element = React.createElement('a',{href: 'google.com'},'Rafa')


const container = document.getElementById('app')

ReactDOM.render(
<Badge firstName = "Rafael" 
      lastName = "Cabrera"
      jobTitle="Frontend Developer"
      avatar = "https://s.gravatar.com/avatar/89217f4ba70f71a8eb88ef4c20d85aa8?s=80"
      twitter= "RafaC3D"/> , container)
