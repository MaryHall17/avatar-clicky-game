import React, { Component } from "react";
import ClickCard from "./component/ClickCard";
import card from "./card.json";
import Wrapper from "./component/Wrapper";
import Title from "./component/Title";
import './App.css';

class App extends Component {
    state = {
        card,
        click:{1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0, 10:0, 11:0, 12:0},
        score: 0,
        highScore: 0
     };

   shuffleArray = card => {
   let i = 0;
    for (i = 0; i < card.length; i++) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = card[i]
        card[i] = card[j]
        card[j] = temp;
     } 
     this.setState({ card });
  };



    tallyScore = id => { 
        if(this.state.click[id]===0) {
            console.log("original score: " + this.state.score);
           var cardClickHistory=this.state.click;
           var tally=this.state.score;
           console.log("click " + cardClickHistory);
           cardClickHistory[id]+=1;
           tally+=1;
           console.log("after " + cardClickHistory);
           console.log("after " + tally);
           this.setState({ click: cardClickHistory });
           this.setState({ score: tally });
           console.log("history set " + this.state.click[id]);
          } else if(this.state.click[id]===1 && this.state.score > this.state.highScore) {
            var reset=0;
            this.setState({ score: reset});
            this.setState({ highScore: this.state.score});
            this.setState({ click: {1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0, 10:0, 11:0, 12:0} });
            console.log("score " + this.state.score);
            console.log("high score " + this.state.highScore);
          } else {
          reset=0;
          this.setState({ score: reset});
          this.setState({ click: {1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0, 10:0, 11:0, 12:0} });
          console.log(this.state.score);
         }
       };

    render () {
        return (
            <Wrapper>
            <Title>Click Game Current Score: {this.state.score} High Score: {this.state.highScore}</Title>
            {this.state.card.map(card =>
                <ClickCard
                //shuffleCard={this.shuffleArray}
                tallyScore={this.tallyScore}
                id={card.id}
                image={card.image}
                key={card.id}
                name={card.name}
                />
            )}
            </Wrapper>
        );
    }
}



export default App;