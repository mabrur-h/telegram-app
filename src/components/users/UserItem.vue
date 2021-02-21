<template>
  <v-card
      class="mx-auto"
  >
    <v-list two-line>
      <v-list-item-group
          v-model="selectedItem"
          color="primary"
      >
        <v-list-item
            v-for="(user) in filteredUsers"
            :key="user.id"
            class="pl-0 user-item-wrapper"
            @click="changeMessage(user.id)"
        >
          <div class="list-item-avatar">
            <v-avatar
                size="52"
                class="mr-2"
            >
              <img
                  :src="user.avatar"
                  alt="John"
                  style="width: 90%; height: 90%"
              >
            </v-avatar>
            <v-divider
                inset
            ></v-divider>
          </div>
          <v-list-item-content>
            <v-list-item-title v-html="user.name" class="user-name"></v-list-item-title>
            <v-list-item-subtitle v-html="'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, sint!'"
                                  class="user-subtitle"></v-list-item-subtitle>
          </v-list-item-content>
          <div class="item-widgets">
            <div class="widget-head">
              <span class="d-block"><i class="icon-check_all_big"></i></span>
              <span class="widget-date">12:45</span>
            </div>
            <div class="widget-foot">
              <span class="tab-badge">4</span>
            </div>
          </div>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "UserItem",
  props: {
    search: String
  },
  data: () => ({
    selectedItem: 1,
    users: [],
    filteredUsers: []
  }),
  methods: {
    clickAlert() {
      console.log('hi')
    },
    loadUsers() {
      this.$http.get('http://localhost:3000/users')
          .then(response => {
            return response.json()
          })
          .then((json) => {
            this.users = json
            this.filteredUsers = json
          })
    },
    resultOfSearch(searchValue) {
      this.filteredUsers = this.users.filter((item) => {
        return searchValue.toLowerCase().split(' ').every(v => item.name.toLowerCase().includes(v))
      })
    },
    changeMessage(id) {
      this.$emit('getMessage', id)
    }
  },
  created() {
    this.loadUsers()
  },
  computed: {
    resultList() {
      if (this.search) {
        return this.list.filter((item) => {
          return this.search.toLowerCase().split(' ').every(v => item.name.toLowerCase().includes(v))
        })
      } else {
        return this.list;
      }
    }
  },
  watch: {
    search: function (newVal) { // watch it
      this.resultOfSearch(newVal);
    }
  }
}
</script>

<style scoped>

</style>


