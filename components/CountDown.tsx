import { View, Text } from 'react-native'
import React from 'react'

export const renderCountdown = (startDate: Date) => {
    const currentDate = new Date();
    const startDateTime = startDate.getTime();
    const currentDateTime = currentDate.getTime();
    const timeDifference = startDateTime - currentDateTime;

    // Calculate days remaining
    const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    return (
      <Text style={{ color: daysRemaining <= 0 ? "red" : "white" }}>
        {daysRemaining <= 0
          ? "Overdue"
          : daysRemaining === 1
          ? "1 day left"
          : `${daysRemaining} days left`}
      </Text>
    );
  };