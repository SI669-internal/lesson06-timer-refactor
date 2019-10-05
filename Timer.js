import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export class Timer extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        timeRemaining: -1,
        buttonText: "Start"
      }
    }
  
    start = () => {
      this.setState(() => ({ 
          timeRemaining: 10,
          buttonText: "Restart"
      }));
      setTimeout(this.timerTick, 1000);
    }
  
    timerTick = () => {
      this.setState(prevState => ({
        timeRemaining: prevState.timeRemaining - 1
      }));
  
      if (this.state.timeRemaining > 0) { 
        this.timer = setTimeout(this.timerTick, 1000);
      } else {
        this.timer = undefined;
      }
    }
  
    getDisplayText = () => {
      if (this.state.timeRemaining > 0) {
        return this.state.timeRemaining;
      } else if (this.state.timeRemaining < 0) {
        return "Click to start!";
      } else {
        return "Timer Done!";
      }
    }
  
    render() {
      return (
        <View style={timerStyles.timerContainer}>
          <Text style={timerStyles.timerTitle}>
            10 Second Timer 
          </Text>
          <Text style={timerStyles.timeLeft}>
            { this.getDisplayText() }
          </Text>
          <TouchableOpacity
            onPress = {this.start} 
            style = {timerStyles.b}>
            <Text style = {timerStyles.bText}>
              {this.state.buttonText}
            </Text>
          </TouchableOpacity>
        </View>
        );
    }
  }

  const timerStyles = StyleSheet.create({
    timerContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    timerTitle: {
      fontSize: 40
    },
    timeLeft: {
      fontSize: 20,
      margin: 10
    },
    b: {
      padding: 10,
      backgroundColor: "green",
    },
    bText: {
      color: "white", 
      justifyContent: 'center', 
      alignItems: 'center'
    }
    
  });