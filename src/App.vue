<template>
  <v-app>
    <v-main class="py-10">
      <v-container>
        <div>
          <v-row>
            <v-col
                cols="12"
                sm="4"
                class="px-0 py-0"
            >
              <v-sheet
                  height="85vh"
                  class="contacts-wrapper rounded-bl-lg rounded-tl-lg"
              >
                <v-card
                    flat
                    class="transparent"
                >
                  <v-navigation-drawer
                      v-model="drawer"
                      absolute
                      temporary
                  >
                    <v-list>
                      <v-list-item class="px-2">
                        <v-list-item-avatar size="60">
                          <v-img src="https://randomuser.me/api/portraits/men/1.jpg"></v-img>
                        </v-list-item-avatar>
                      </v-list-item>

                      <v-list-item
                          link
                      >
                        <v-list-item-content>
                          <v-list-item-title class="title navigation-item">
                            Alan Walker
                          </v-list-item-title>
                          <v-list-item-subtitle class="text-muted">+998-88-307-11-11</v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>

                    <v-divider></v-divider>

                    <v-list
                        nav
                        dense
                    >
                      <v-list-item link>
                        <v-list-item-icon>
                          <v-icon>mdi-folder</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title class="navigation-item">My Files</v-list-item-title>
                      </v-list-item>
                      <v-list-item link>
                        <v-list-item-icon>
                          <v-icon>mdi-account-multiple</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title class="navigation-item">Shared with me</v-list-item-title>
                      </v-list-item>
                      <v-list-item link>
                        <v-list-item-icon>
                          <v-icon>mdi-star</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title class="navigation-item">Starred</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-navigation-drawer>
                  <header class="rounded-0 px-5 pt-3">
                    <div class="d-flex flex-column header-wrapper">
                      <div class="d-flex justify-space-between">
                        <div class="system-btn">
                          <button class="btn close-button"><span>X</span></button>
                          <button class="btn minimize-button"><span>-</span></button>
                          <button class="btn expand-button"><span>+</span></button>
                        </div>

                      </div>
                    </div>
                  </header>
                  <v-row>
                    <v-col
                        cols="12"
                        sm="3"
                        class="pr-0 py-0 pt-5"
                    >
                      <v-tab>
                        <v-app-bar-nav-icon
                          @click="drawer = true"
                        ></v-app-bar-nav-icon>
                      </v-tab>

                    </v-col>
                    <v-col
                        cols="12"
                        sm="9"
                        class="pl-0 py-0 pt-5 d-flex align-center"
                    >
                      <label class="header-search">
                        <i class="icon-search"></i>
                        <input
                            type="search"
                            class="form-control"
                            placeholder="Search"
                            v-model="searchArea"
                        >
                      </label>
                    </v-col>
                  </v-row>
                </v-card>
                <v-row>
                  <v-col
                    cols="12"
                    sm="3"
                    class="pr-0"
                  >
                    <v-sheet color="transparent" height="75vh" class="px-0 py-0 pt-5">
                      <div class="folder-btn">
                        <div class="button-top">
                          <button
                              class="tab-btn"
                              v-for="(tab, index) in tabItems"
                              :key="index"
                          >
                            <i :class="tab.icon"></i>
                            <p v-text="tab.name"></p>
                            <span class="tab-badge">{{ tab.notification }}</span>
                          </button>
                        </div>
                        <div class="button-bottom">
                          <button class="tab-btn">
                            <i class="icon-settings"></i>
                            <p>Settings</p>
                          </button>
                        </div>
                      </div>
                    </v-sheet>

                  </v-col>
                  <v-col
                    cols="12"
                    sm="9"
                    class="pl-0"
                  >
                    <v-sheet color="transparent" height="60vh" class="py-0 px-0 user-list-wrapper">
                      <user-item :search="searchArea" @getMessage="getMessageFromUser"></user-item>
                    </v-sheet>

                  </v-col>
                </v-row>
              </v-sheet>
            </v-col>

            <v-col
                cols="12"
                sm="5"
                class="px-0 py-0"
            >
              <v-sheet
                  height="85vh"
                  style="background-color: #1E1E1E; position: relative"
              >
                <div class="message-wrapper">
                  <header class="user-info" @click.stop="dialog = true">
                    <div class="user-info-wrapper">
                      <div class="personal-info">
                        <h4 class="user-info-name"  >
                          {{ userInfo.fullName }}
                        </h4>
                        <p class="last-seen">{{userInfo.lastAct}}</p>
                      </div>
                      <div class="user-info-widgets">
                        <button class="info-btn">
                          <i class="icon-search"></i>
                        </button>
                        <button class="info-btn">
                          <i class="icon-more_vertical"></i>
                        </button>
                      </div>
                    </div>
                  </header>
                  <main class="message-area">
                    <div class="main-wrapper">
                      <ul class="msg-list">
                        <li class="chat-msg msg-receive">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, sint!
                          <span class="message-time">20:20</span>
                          <i class="icon-check_all_big"></i>
                          <span class="close-button">x</span>
                        </li>
                        <li
                            class="chat-msg msg-sent"
                            v-for="(message) in filteredMessages"
                            :key="message.id"
                        >
                          {{message.message}}
                          <span class="message-time">{{message.time | filterDateTime}}</span>
                          <i class="icon-check_all_big"></i>
                          <span class="close-button" @click="deleteMessage(message.id)">x</span>
                        </li>
                      </ul>
                    </div>
                  </main>
                  <footer class="user-msg-footer">
                    <div class="file-input-wrapper">
                      <input type="file" id="file-input" class="file-input">
                      <label for="file-input" class="input-label">
                        <i class="icon-slider_02"></i>
                      </label>
                    </div>
                    <div class="msg-input-wrapper">
        <textarea class="input-message"
                  placeholder="Write a message..."
                  v-model.trim="createdMessage"
                  @keypress.enter="postMessage"
        ></textarea>
                    </div>
                    <div class="footer-widgets-wrapper">
                      <div class="footer-icons">
                        <i class="icon-happy"></i>
                        <i class="icon-mic"></i>
                      </div>
                    </div>
                  </footer>

                  <v-dialog
                      v-model="dialog"
                      max-width="400px"
                  >
                    <v-card>
                      <user-info :userInfo="userInfo" />
                    </v-card>
                  </v-dialog>
                </div>
              </v-sheet>
            </v-col>

            <v-col
                cols="12"
                sm="3"
                class="px-0 py-0"
            >
              <v-sheet
                  height="85vh"
                  class="rounded-br-lg rounded-tr-lg users-information"
              >
                <user-info :userInfo="userInfo" />
              </v-sheet>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

import UserItem from "@/components/users/UserItem";
import UserInfo from "@/components/users/UserInfo";

export default {
  components: {UserItem, UserInfo},
  data: () => ({
    drawer: false,
    group: null,
    searchArea: null,
    tabItems: [
      {name: 'All', icon: 'icon-chat', notification: 2},
      {name: 'Users', icon: 'icon-user', notification: 3}
    ],
    dialog: false,
    createdMessage: '',
    messages: [],
    filteredMessages: '',
    userId: 1,
    userInfo: {
      fullName: '',
      photoUrl: '',
      userName: '',
      phoneNumber: '',
      bio: '',
      lastAct: ''
    }
  }),
  methods: {
    postMessage() {
      if (this.createdMessage.length > 0) {
        const messages = {
          message: this.createdMessage,
          time: this.getNow(),
          chat_id: this.userId
        }

        this.$http.post('http://localhost:3000/messages', messages)
            .then(response => {
              return response.json()
            })
            .then(newMessage => {
              this.loadMessages();
              console.log(newMessage)
            })

        this.createdMessage = ''
      }
    },
    loadMessages() {
      this.$http.get('http://localhost:3000/messages')
          .then(response => {
            console.log('response', response)
            return response.json()
          })
          .then(messages => {
            console.log('check message', messages)
            this.messages = messages
            this.getMessageFromUser(this.userId)
          })
    },
    getNow: function() {
      let timestamp = '';
      const today = new Date();
      const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      timestamp = date + ' ' + time;
      console.log(timestamp)
      return today
    },
    deleteMessage(id) {
      this.$http.delete('http://localhost:3000/messages/'+id)
          .then(response => {
            return response.json()
          })
          .then(deletedMessage => {
            this.loadMessages()
            console.log(deletedMessage)
          })
    },
    getMessageFromUser(id) {
      this.userId = id;
      console.log('from app', id)
      this.filteredMessages = this.messages.filter(function (message) {
        return message.chat_id == id
      })
    },
    getUserInfo(id) {
      this.$http.get('http://localhost:3000/users/'+id)
          .then(response => {
            return response.json()
          })
          .then(userInfo => {
            this.userInfo.fullName = userInfo.name;
            this.userInfo.photoUrl = userInfo.avatar
            this.userInfo.userName = userInfo.username
            this.userInfo.phoneNumber = userInfo.phone
            this.userInfo.bio = userInfo.bio
            this.userInfo.lastAct = userInfo.activity
          })
    }
  },
  created() {
    this.loadMessages()
    this.getUserInfo(2)
  },
  watch: {
    userId: function (newVal) { // watch it
      console.log('watched user id', newVal)
      this.getUserInfo(newVal)
    }
  }
};
</script>

<style>
@import 'assets/css/style.css';
@import 'assets/fonts/icons/style.css';

</style>