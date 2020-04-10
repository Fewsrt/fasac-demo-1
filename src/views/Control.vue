<template>
  <div app="control">
    <h1>FaSAC Control</h1>
    <v-btn class="ma-2" color="error" outlined @click="light_1on">On</v-btn>
    <v-btn class="ma-2" outlined color="indigo" @click="light_1off">Off</v-btn>
    <v-btn class="ma-2" color="error" outlined @click="light_2on">On</v-btn>
    <v-btn class="ma-2" outlined color="indigo" @click="light_2off">Off</v-btn>
    <h3>Check Status : {{ relay }}</h3>
  </div>
</template>

<script>
export default {
  name: "control",
  data() {
    return {
      relay: "",
      message: []
    };
  },
  methods: {
    light_1on() {
      this.$mqtt.publish("raspi/1", "relay-1-0");
      console.log("on");
    },
    light_1off() {
      this.$mqtt.publish("raspi/1", "relay-1-1");
      console.log("off");
    },
    light_2on() {
      this.$mqtt.publish("raspi/1", "relay-2-0");
      console.log("on");
    },
    light_2off() {
      this.$mqtt.publish("raspi/1", "relay-2-1");
      console.log("off");
    }
    // onMsg(topic, data) {
    //   console.log("topic", topic);
    //   console.log("data", data);
    //   this.message.push(topic);
    // }
  },
  mqtt: {
    "raspi/1"(data, topic) {
      console.log(topic + ": " + String.fromCharCode.apply(null, data));
    }
  }
};
</script>

<style></style>
