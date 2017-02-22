<template lang="html">
  <div>
    <h1>{{ clientid }}</h1>
    <div class="client">
      <ul>
          <li v-for="message in messages">
            <label>{{ message.sender }}：</label> {{ message.text }}
          </li>
      </ul>
      <div class="msgbox">
        <input v-model="msg" placeholder="Enter a message, then hit [enter]" @keyup.enter="trySendMessage">
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  props: ['clientid'],
  data () {
    return {
      msg: ''
    }
  },
  computed: {
    ...mapState({
      messages: ({msn}) => msn.messages
    })
  },
  methods: {
    trySendMessage() {
      this.newMessage({
        text: this.msg,
        sender: this.clientid
      })
      this.msg = ''
    },

    ...mapActions(['newMessage'])
  },
  components: {}
}
</script>

<style lang="css">
  .client {
    border: 1px solid #ccc;
    background: #fff;
    position: relative;
  }
  .client ul {
    list-style: none;
    padding: 1em;
    margin: 0;
    height: 300px;
    overflow: auto;
  }
  .client ul li {
    padding: 0.2em 0.5em;
  }
  .client ul li label {
    font-weight: 700;
  }
  .client .msgbox {
    border-top: 1px solid #ccc;
  }
  .client input {
    font-size: 15px;
    width: calc(100% - 2.5em);
    padding: 0.25em;
    margin: 1em;
  }
</style>
