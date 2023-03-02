import { createStore } from 'vuex'

import contactStore from './components/contact.store';
import conversationHistoryStore from './components/conversation-history.store';
import emojisStore from './components/emojis.store';
import modalStore from './components/modal.store';
import multimediaOptionsStore from './components/multimedia-options.store';
import overlayStore from "./components/overlay.store";
import overlayPhoneChatStore from "./components/overlay-phone-chat.store";
import overlayPhoneDataStore from './components/overlay-phone-data.store';
import overspreadStore from "./common/overspread.store";
import phoneChatStore from "./components/phone-chat.store";
import phoneDataStore from './components/phone-data.store';
import sessionStore from './common/session.store';
import themeStore from "./common/theme.store";

export default createStore({
  modules: {
    contactStore,
    conversationHistoryStore,
    emojisStore,
    modalStore,
    multimediaOptionsStore,    
    overlayStore,
    overlayPhoneChatStore,
    overlayPhoneDataStore,
    overspreadStore,
    phoneChatStore,
    phoneDataStore,
    sessionStore,
    themeStore
  }
})
