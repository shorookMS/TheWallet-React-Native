import * as actionTypes from "./actionTypes";

import axios from "axios";
const instance = axios.create({
  baseURL: "http://68.183.217.91/api/goal/"
});

export const fetchGoals = () => {
  return dispatch => {
    instance
      .get("list/")
      .then(res => res.data)
      .then(goals => {
        dispatch({ type: actionTypes.FETCH_GOALS, payload: goals });
      })
      .catch(err => {
        dispatch(console.log(err.response.data));
      });
  };
};

export const addGoal = (goals, navigation) => {
  return dispatch => {
    instance
      .post("create/", goals)
      .then(res => res.data)
      .then(goals => {
        dispatch({
          type: actionTypes.ADD_GOAL,
          payload: goals
        });
      })
      .then(() => navigation.navigate("GoalsView"))

      .catch(err => {
        dispatch(console.log(err.response.data));
      });
  };
};

export const updateGoal = (goal, navigation) => {
  return dispatch => {
    instance
      .put(`${goal.id}/update/`, {
        end_date: goal.end_date,
        amount: goal.amount,
        label: goal.label
      })
      .then(res => res.data)
      .then(goal => {
        dispatch({
          type: actionTypes.UPDATE_GOAL,
          payload: goal
        });
      })
      .catch(err => {
        dispatch(console.log(err.response.data));
      });
  };
};

export const updateGoalBalance = goal => {
  return dispatch => {
    dispatch({
      type: actionTypes.UPDATE_GOAL,
      payload: goal
    });
  };
};
