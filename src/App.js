import { Component } from "react";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Statistics from "./components/Statistics/Statistics";
import Section from "./components/Section/Section";
import Notification from "./components/Notification/Notification";
import Container from "./components/Container/Container";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countLeftFeedbackHandler = (value) => {
    this.setState((prevState) => ({
      [value]: prevState[value] + 1,
    }));
  };

  countTotalFeedback = (arrayOfValues) =>
    arrayOfValues.reduce((acc, value) => acc + value, 0);

  countPositiveFeedbackPercentage = (good, total) =>
    Math.round((good / total) * 100);

  render() {
    const { good, neutral, bad } = this.state;

    const keys = Object.keys(this.state);
    const values = Object.values(this.state);
    const total = this.countTotalFeedback(values);
    const positivePercentage = this.countPositiveFeedbackPercentage(
      good,
      total
    );

    return (
      <div className="App">
        <h1>React hw 2 - Feedback </h1>
        <Container>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={keys}
              onLeaveFeedback={this.countLeftFeedbackHandler}
            />
          </Section>

          <Section title="Statistics">
            {total > 0 ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={positivePercentage}
              />
            ) : (
              <Notification message="No feedback given" />
            )}
          </Section>
        </Container>
      </div>
    );
  }
}
export default App;
