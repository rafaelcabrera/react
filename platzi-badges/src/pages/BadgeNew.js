import React from "react";

import './styles/BadgeNew.css'
import Navbar from '../components/Navbar'
import header from '../images/stars.svg'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'

class BadgeNew extends React.Component {
    render() {
        return (
            <div>
            <Navbar />
            <div className="BadgeNew__hero">
              <img className="img-fluid" src={null} alt="Logo" />
            </div>

                    <div className ="container">
                    <div className="row">
                    <div className ="col-6">
                              <Badge 
                                    firstName = "Rafael" 
                                    lastName = "Cabrera"
                                    jobTitle="Frontend Developer"
                                    avatar = "https://s.gravatar.com/avatar/89217f4ba70f71a8eb88ef4c20d85aa8?s=80"
                                    twitter= "RafaC3D" 
                                    />
                        </div>
                            <div className = "col-6">
                        {/* aca iria el BadgeForm */}
                                <BadgeForm/>
                            </div>
                        </div>
                    </div>
                </div>
            
        )
    }
}
export default BadgeNew;