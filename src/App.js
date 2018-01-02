import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  alreadyPlayed = id => {

    // Filter this.state.friends for friends with an id not equal to the id being removed

    let friends = this.state.friends.sort(friend =>{.5-Math.random()});
    // Set this.state.friends equal to the new friends array
    this.setState({ friends});

      {{console.log(friends)}}


  };
    // var fruits = [1, 2, 3, 4, 5 ,6];
    // fruits.sort(function(){return .5-Math.random();});
    // document.write(fruits , ".......");
    //
    //
    // fruits.sort(function(){return .5-Math.random();});
    // document.write(fruits, ".......");
    //
    // fruits.sort(function(){return .5-Math.random();});
    // document.write(fruits, ".......");
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>National Park Memory Game</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            alreadyPlayed={this.alreadyPlayed}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
