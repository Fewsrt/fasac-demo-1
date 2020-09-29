<template>
  <div>
    <h1>Chat Room</h1>
    <div>
      <v-text-field v-model="name" label="Name"></v-text-field>
      <v-text-field v-model="msg" label="Message"></v-text-field>
      <v-btn @click="send">Send</v-btn>
    </div>
    <ul>
      <li v-for="(item, index) in message" :key="index">
        <b>{{ item.name }}</b> say : {{ item.msg }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      msg: "",
      message: []
    };
  },
  created() {
    // subscibe
    this.$socket.subscribe("room39", this.onMsg);
  },
  beforeDestory() {
    // unsubscibe
    this.$socket.unsubscribe("room39");
  },
  methods: {
    send() {
      this.$socket.publish("room39", {
        name: this.name,
        msg: this.msg
      });
    },
    onMsg(topic, data) {
      console.log("topic",topic);
      console.log("data",data);
      this.message.push(topic)
    }
  }
};
</script>