import styles from "./App.module.css";
import React from "react";
import { Statistics } from "../components/Statistics/Statistics";
import { Section } from "../components/Section/Section";
import { FeedbackOptions } from "../components/FeedbackOptions/FeedbackOptions";
import { Notification } from "../components/Notification/Notification";

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedbackGoodChoice = () => {
    this.setState((prevState) => {
      const { good } = this.state;
      return {
        good: Number(`${Number(good) + 1}`),
      };
    });
  };
  feedbackNeutralChoice = () => {
    this.setState((prevState) => {
      const { neutral } = this.state;
      return {
        neutral: Number(`${Number(neutral) + 1}`),
      };
    });
  };
  feedbackBadChoice = () => {
    this.setState((prevState) => {
      const { bad } = this.state;
      return {
        bad: Number(`${Number(bad) + 1}`),
      };
    });
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = Number(`${Number(good) + Number(neutral) + Number(bad)}`);
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const positivePercentage = Math.round(
      (100 * Number(good)) / this.countTotalFeedback()
    );
    return positivePercentage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <section className={styles.container}>
        <div className={styles.feedback}>
          <Section title={"Please leave your feedback"}>
            <FeedbackOptions
              options={["Good", "Neutral", "Bad"]}
              onLeaveFeedback={[
                this.feedbackGoodChoice,
                this.feedbackNeutralChoice,
                this.feedbackBadChoice,
              ]}
            />
          </Section>
          {this.countTotalFeedback() > 0 ? (
            <Section title={"Statistics"}>
              <Statistics
                goodValue={good}
                neutralValue={neutral}
                badValue={bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            </Section>
          ) : (
            <Notification massage={"No feedback given"} />
          )}
        </div>
      </section>
    );
  }
}
export default App;
