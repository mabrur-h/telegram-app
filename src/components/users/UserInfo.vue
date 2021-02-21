<template>
  <div>
    <div class="about-user-wrapper">
      <header class="about-header d-flex justify-end pa-2">
          <v-icon>mdi-close</v-icon>
      </header>
      <div class="user-avatar d-flex justify-center flex-column align-center">
        <v-avatar size="100">
          <img
              :src="photoUrl"
              :alt="fullName"
          >
        </v-avatar>
        <h4 class="user-info-name mt-3">
          {{ fullName }}
        </h4>
        <p class="last-seen">
          last seen at 20:20
        </p>
      </div>
      <v-divider></v-divider>
      <div class="contacts d-flex">
        <div class="icon-wrapper mr-4">
          <v-icon>mdi-information-outline </v-icon>
        </div>
        <div class="personal-info-wrapper">
          <div class="mobile-num d-flex flex-column mb-4">
            <span class="info-text">{{ phoneNumber }}</span>
            <span class="text-muted">Mobile</span>
          </div>
          <div class="bio d-flex flex-column mb-4">
            <span class="info-text">{{ bio }}</span>
            <span class="text-muted">Bio</span>
          </div>
          <div class="u-name d-flex flex-column mb-4">
            <span class="info-text">
              <span class="select-none">@</span>
              <span>{{ userName }}</span>
            </span>
            <span class="text-muted">Username</span>
          </div>
        </div>
      </div>
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
  </div>
</template>

<script>

export default {
  name: "UserInfo",
  props: {
    userId: ''
  },
  data: () => ({
    test: 'Here',
    fullName: '',
    photoUrl: '',
    userName: '',
    phoneNumber: '',
    bio: ''
  }),
  methods: {
    getUserInfo(id) {
      this.$http.get('http://localhost:3000/users/'+id)
          .then(response => {
            return response.json()
          })
          .then(userInfo => {
            this.fullName = userInfo.name;
            this.photoUrl = userInfo.avatar
            this.userName = userInfo.username
            this.phoneNumber = userInfo.phone
            this.bio = userInfo.bio
          })
    }
  },
  watch: {
    userId: function (newVal) { // watch it
      console.log('watched user id', newVal)
      this.getUserInfo(newVal)
    }
  }
}
</script>

<style scoped>

</style>