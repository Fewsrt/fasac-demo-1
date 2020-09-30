<template>
  <div app="control">
    <h1>FaSAC Controller</h1>
    <h3>Pump 1</h3>
    <v-btn class="ma-2" color="error" outlined @click="light_1on">On</v-btn>
    <v-btn class="ma-2" outlined color="indigo" @click="light_1off">Off</v-btn>
    <h3>Pump A</h3>
    <v-btn class="ma-2" color="error" outlined @click="light_2on">On</v-btn>
    <v-btn class="ma-2" outlined color="indigo" @click="light_2off">Off</v-btn>
    <h3>Pump B</h3>
    <v-btn class="ma-2" color="error" outlined @click="light_3on">On</v-btn>
    <v-btn class="ma-2" outlined color="indigo" @click="light_3off">Off</v-btn>
    <h3>Pump pH</h3>
    <v-btn class="ma-2" color="error" outlined @click="light_4on">On</v-btn>
    <v-btn class="ma-2" outlined color="indigo" @click="light_4off">Off</v-btn>
    <h3>Check Status : {{ relay1 }}</h3>
    <h3>Check Status : {{ relay2 }}</h3>
    <h3>Check Status : {{ relay3 }}</h3>
    <h3>Check Status : {{ relay4 }}</h3>
  </div>
</template>

<script>
export default {
  name: "control",
  data() {
    return {
      relay1: "",
      relay2: "",
      relay3: "",
      relay4: ""
    };
  },
  mqtt: {
    "relay-1-on": function(val) {
      var relay1 = new TextDecoder("utf-8").decode(val);
      this.relay1 = val;
      console.log(relay1);
    },
    "relay-1-off": function(val) {
      var relay1 = new TextDecoder("utf-8").decode(val);
      this.relay1 = val;
      console.log(relay1);
    },
    "relay-2-on": function(val) {
      var relay2 = new TextDecoder("utf-8").decode(val);
      this.relay2 = val;
      console.log(relay2);
    },
    "relay-2-off": function(val) {
      var relay2 = new TextDecoder("utf-8").decode(val);
      this.relay2 = val;
      console.log(relay2);
    },
    "relay-3-on": function(val) {
      var relay3 = new TextDecoder("utf-8").decode(val);
      this.relay3 = val;
      console.log(relay3);
    },
    "relay-3-off": function(val) {
      var relay3 = new TextDecoder("utf-8").decode(val);
      this.relay3 = val;
      console.log(relay3);
    },
    "relay-4-on": function(val) {
      var relay4 = new TextDecoder("utf-8").decode(val);
      this.relay4 = val;
      console.log(relay4);
    },
    "relay-4-off": function(val) {
      var relay4 = new TextDecoder("utf-8").decode(val);
      this.relay4 = val;
      console.log(relay4);
    }
  },
  created() {
    // subscibe
    this.$mqtt.subscribe("relay-1-on", { qos: 0 });
    this.$mqtt.subscribe("relay-1-off", { qos: 0 });
    this.$mqtt.subscribe("relay-2-on", { qos: 0 });
    this.$mqtt.subscribe("relay-2-off", { qos: 0 });
    this.$mqtt.subscribe("relay-3-on", { qos: 0 });
    this.$mqtt.subscribe("relay-3-off", { qos: 0 });
    this.$mqtt.subscribe("relay-4-on", { qos: 0 });
    this.$mqtt.subscribe("relay-4-off", { qos: 0 });
  },
  methods: {
    light_1on() {
      this.$mqtt.publish("raspi/1", "relay-1-1");
    },
    light_1off() {
      this.$mqtt.publish("raspi/1", "relay-1-0");
    },
    light_2on() {
      this.$mqtt.publish("raspi/1", "relay-2-1");
    },
    light_2off() {
      this.$mqtt.publish("raspi/1", "relay-2-0");
    },
    light_3on() {
      this.$mqtt.publish("raspi/1", "relay-3-1");
    },
    light_3off() {
      this.$mqtt.publish("raspi/1", "relay-3-0");
    },
    light_4on() {
      this.$mqtt.publish("raspi/1", "relay-4-1");
    },
    light_4off() {
      this.$mqtt.publish("raspi/1", "relay-4-0");
    }
    // onMsg(topic, data) {
    //   console.log("topic", topic);
    //   console.log("data", data);
    //   this.message.push(topic);
    // }
  }
};
</script>

<style></style>
