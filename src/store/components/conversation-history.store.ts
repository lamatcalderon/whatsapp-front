export const CONVERSATION_HISTORY_GET_MESSAGES_HISTORY = "conversationHistoryStore/getMessagesHistory";

export const CONVERSATION_HISTORY_LOAD_MESSAGES_HISTORY = "conversationHistoryStore/loadMessagesHistory";
export const CONVERSATION_HISTORY_PUSH_MESSAGE = "conversationHistoryStore/pushMessage";

import { TypeMessageHistoryEnum } from "../../enums/type-message-history.enum";
import { isEmoji, findEmoji, createHtmlMessageContent } from "../../utils/media.util";

import conversationHistory from "../../assets/data-dummy/conversationHistory.json";

export default {
    namespaced: true,
    state: {
        messagesHistory: [],
    },
    mutations: {
        LOAD_MESSAGES_HISTORY(state: any, id: number) {
            const newConversationHistory = conversationHistory[id];
            if (newConversationHistory?.length > 0) {
                newConversationHistory.forEach((x: any, index: number) => {
                    if (x.type === TypeMessageHistoryEnum.CONVERSATION) {
                        if (x.messageContent?.length === 2) {
                            if (isEmoji(x.messageContent)) {
                                const emoji = findEmoji(x.messageContent);
                                if (emoji) {
                                    newConversationHistory[index] = { ...x, "thumbail": emoji['thumbail'] };
                                }
                            }
                        } else {
                            //@ts-ignore
                            newConversationHistory[index] = { ...x, 'newMessageContent': createHtmlMessageContent(x.messageContent) };
                        }
                    }

                    //@ts-ignore
                    if (x?.quotedMessage && x?.quotedMessage.type === TypeMessageHistoryEnum.CONVERSATION) {
                        //@ts-ignore
                        newConversationHistory[index].quotedMessage = { ...x?.quotedMessage, 'newMessageContent': createHtmlMessageContent(x?.quotedMessage.messageContent) }
                    }
                });
                state.messagesHistory = newConversationHistory;
            }
        },
        PUSH_MESSAGE(state: any, message: any) {
            const date = new Date;
            const newMessage = {
                ...message,
                "fromMe": true,
                "date": `${date.getHours() > 9 ? date.getHours() : '0' + date.getHours()}:${date.getMinutes() > 10 ? date.getMinutes() : '0' + date.getMinutes()}`,
                "readStatus": "sent"
            };
            if (newMessage.type === TypeMessageHistoryEnum.CONVERSATION) {
                if (newMessage.messageContent?.length === 2) {
                    if (isEmoji(newMessage.messageContent)) {
                        const emoji = findEmoji(newMessage.messageContent);
                        if (emoji) {
                            newMessage.thumbail = emoji['thumbail'];
                        }
                    }
                } else {
                    newMessage.newMessageContent = createHtmlMessageContent(newMessage.messageContent);
                }
            }
            state.messagesHistory.push(newMessage);
        }
    },
    actions: {
        loadMessagesHistory({ commit }: any, id: number) {
            commit('LOAD_MESSAGES_HISTORY', id)
        },
        pushMessage({ commit }: any, message: Object) {
            commit('PUSH_MESSAGE', message);
        }

    },
    getters: {
        getMessagesHistory(state: any) {
            return state.messagesHistory;
        }
    }
}