<template>
  <div app="control">
    <h1>FaSAC Control</h1>
    <v-btn class="ma-2" color="error" outlined @click="lighton">On</v-btn>
    <v-btn class="ma-2" outlined color="indigo" @click="lightoff">Off</v-btn>
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
    lighton() {
      this.$mqtt.publish("raspi/1", "0");
      console.log("on");
      this.$mqtt.subscribe("relay/on", this.onMsg);
    },
    lightoff() {
      this.$mqtt.publish("raspi/1", "1");
      console.log("off");
      this.$mqtt.subscribe("relay/off", this.onMsg);
    },
    onMsg(topic, data) {
      console.log("topic", topic);
      console.log("data", data);
      this.message.push(topic);
    }
  },
  mqtt: {
    "raspi/1"(data, topic) {
      console.log(topic + ": " + String.fromCharCode.apply(null, data));
    }
  }
};
</script>

<style></style>
