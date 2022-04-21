/*
    This file provides HTTP Brokers/Clients or Agents that know the URL of the main API and directly communicates
    with the backend
 */

import HTTPAgent from "./HTTPAgent";

/* there will be no options for the HTTP agent to use */
const options = {};

export const WhyBuyNewTextbookAPI = new HTTPAgent(process.env.REACT_APP_WHY_BUY_NEW_TEXTBOOK_MAIN_API_URL, options);

export const UserBroker = new HTTPAgent(`${process.env.REACT_APP_WHY_BUY_NEW_TEXTBOOK_MAIN_API_URL}/users`, options);

export const PostsBroker = new HTTPAgent(`${process.env.REACT_APP_WHY_BUY_NEW_TEXTBOOK_MAIN_API_URL}/posts`, options);

export const FormsBroker = new HTTPAgent(`${process.env.REACT_APP_WHY_BUY_NEW_TEXTBOOK_MAIN_API_URL}/forms`, options);

