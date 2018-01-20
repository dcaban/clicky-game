import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";

import Mountains from "./components/Mountains";
import friends from "./friends.json";
import Already from "./components/Already";
import "./App.css";

class App extends Component {
  // // Setting this.state.friends to the friends json array
  // state = {
  //   friends
  // };
    constructor(props) {
        super(props);
        this.state = {
            friends,
            score: 0,
            topScore: 0,
            message: "See how many parks you can visit!"
        };
    }



    alreadyPlayed = id => {






    let friends = this.state.friends.sort(friend => (5-Math.random()));




        // Compared whether or not been clicked before
        let rightGuess = false;

        const storedGuesses = this.state.friends.map(friend => {
            // Copies the friend array so we can check the answers
            const newFriendData = { ...friend };

            // then match the id to one in array to check if click is currently true or false
            if (newFriendData.id === id) {
                if (!newFriendData.click) {

                    newFriendData.click = true;
                    rightGuess = true;
                    console.log(friend.id);
                }
                // console.log(newFriendData);
            }
            return newFriendData;
        });

        this.setState({
            friends: storedGuesses
        });

       if (rightGuess == true){
           console.log("truth");
           this.incrementScore();
       }
       else{
           console.log("loser");
           this.restart();
       }

    }



    incrementScore = () => {
        ++this.state.score

        if (this.state.score === 12){
            this.setState({
                score: this.state.score,
                message: "You Win!"
    });
        }
    else{
            this.setState({
                score: this.state.score,
                message: "Right On!"
            })
        }

    }

    restart = () => {
        let endScore = this.state.score;

        let newTopScore = this.state.topScore;

        if (endScore >= newTopScore) {
            newTopScore = endScore;
        }


        this.setState({
            friends,
            score: 0,
            topScore: newTopScore,
            message: "Why don't you visit another park."
        });
    }

  render() {
    return (
      <Wrapper>



        <Title
            score={this.state.score}
            topScore={this.state.topScore}
            message={this.state.message}
        />



          <div className=" container ">
              <div className="row">
                  <div className=" cards center-align ">
        {this.state.friends.map(friend => (
          <FriendCard
            alreadyPlayed={this.alreadyPlayed}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
                  </div>
          </div>
          </div>
        <Mountains>
        </Mountains>



      </Wrapper>



    );
  }
}

export default App;
