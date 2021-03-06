const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
  dialogsData: [
    { id: 1, name: "Aleksandr" },
    { id: 2, name: "Aleksey" },
    { id: 3, name: "Anatoly" },
    { id: 4, name: "Andrey" },
    { id: 5, name: "Anton" },
    { id: 6, name: "Arkady" },
    { id: 7, name: "Artem" },
    { id: 8, name: "Artur" },
  ],

  messagesData: [
    { id: 1, messageText: "Hi" },
    { id: 2, messageText: "Hi, my name is Serhii" },
    { id: 3, messageText: "Yo!" },
    { id: 4, messageText: "Yo!" },
    { id: 5, messageText: "Yo!" },
    { id: 6, messageText: "Yo!" },
  ],

  newMessageText: "Hello, enter your message here!!!",
};

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case SEND_MESSAGE: {
      return {
        ...state,
        messagesData: [
          ...state.messagesData,
          { id: 5, messageText: state.newMessageText },
        ],
        newMessageText: "",
      };
    }

    case UPDATE_NEW_MESSAGE_TEXT:
      return { ...state, newMessageText: action.newMessage };
    default:
      return state;
  }
};

export const sendMessageActionCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};

export const updateNewMessageTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessage: text,
  };
};

export default dialogsReducer;
