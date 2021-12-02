import React from 'react';
import { Component } from 'react';



class System extends Component {
        constructor() {
          super();
          this.state = { data: [] };
        }
      
        // async componentDidMount() {
        //   const response = await fetch(`http://localhost:3000/data`);
        //   const json = await response.json();
        //   this.setState({ data: json });
        // }
    

    render() {
        return (
            <div className="container">
                <div className="first-circle">
                        <p>Points</p>
                </div>
                <p>Points Obtained</p>
                <div className="second-circle">
                    <p>101</p>
                </div>
                <p>Next Rank</p>
            </div>
        )
    }
    
}

export default System;