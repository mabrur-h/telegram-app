<template>
  <div>
    <user-info></user-info>
      <div class="media-tabs">
        <div class="media-tab-wrapper">
          <button class="media-tab-btn">
            Media
          </button>
          <button class="media-tab-btn">
            Link
          </button>
          <button class="media-tab-btn">
            Files
          </button>
          <button class="media-tab-btn">
            Voice
          </button>
        </div>
        <div class="media-tab-footer">

        </div>
      </div>
    </div>

    <v-dialog
        v-model="dialog"
        max-width="400px"
    >
      <v-card>
        <user-info></user-info>
      </v-card>
    </v-dialog>



</template>

<script>
import UserInfo from "@/components/users/UserInfo";

export default {
  name: "Messages",
  components: {UserInfo},
  data() {
    return {
      dialog: false,
      createdMessage: '',
      messages: [],
    }
  },
  methods: {
    postMessage() {
      if (this.createdMessage.length > 0) {
        const messages = {
          message: this.createdMessage,
          time: this.getNow(),
          chat_id: 1
        }

        this.$http.post('http://localhost:3000/messages', messages)
            .then(response => {
              return response.json()
            })
            .then(newMessage => {
              this.loadMessages();
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
          })
    },
    getNow: function() {
      const today = new Date();
      return today.getHours() + ":" + today.getMinutes()
    },
    deleteMessage(id) {
      this.$http.delete('http://localhost:3000/messages/'+id)
          .then(response => {
            return response.json()
          })
          .then(deletedMessage => {
            this.loadMessages()
          })
    }

  },
  created() {
    this.loadMessages()
  }
}
</script>

<style scoped>

</style>