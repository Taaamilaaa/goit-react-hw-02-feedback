import React from "react";
import styles from "./feedback.module.css"
import { Statistics } from "../Statistics/Statistics";
import { Section } from "../Section/Section";
import { FeedbackOptions } from "../FeedbackOptions/FeedbackOptions";
import { Notification } from "../Notification/Notification";

export class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedbackGoodChoice = () => {
    this.setState((prevState) => {
      return {
        good: `${Number(this.state.good) + 1}`,
      };
    });
  };
  feedbackNeutralChoice = () => {
    this.setState((prevState) => {
      console.log(this.state.neutral);
      return {
        neutral: `${Number(this.state.neutral) + 1}`,
      };
    });
  };
  feedbackBadChoice = () => {
    this.setState((prevState) => {
      console.log(this.state.bad);
      return {
        bad: `${Number(this.state.bad) + 1}`,
      };
    });
  };
  countTotalFeedback = () => {
    const total = `${
      Number(this.state.good) +
      Number(this.state.neutral) +
      Number(this.state.bad)
    }`;
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    const positivePercentage = Math.round(
      (100 * Number(this.state.good)) / this.countTotalFeedback()
    );
    return positivePercentage;
  };

  render() {
    return (
      <section className={styles.container}>
        <div className = {styles.feedback}>
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
        {this.countTotalFeedback() >
          0 ? (
            <Section title={"Statistics"}>
              <Statistics
                goodValue={this.state.good}
                neutralValue={this.state.neutral}
                badValue={this.state.bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            </Section>
        ) : (<Notification
        massage={"No feedback given"}
        />)}</div>
        
      </section>
    );
  }
}
