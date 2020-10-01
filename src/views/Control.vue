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
    <h2>Relay Status</h2>
    <li>Relay 1 Status : {{ relay1 }}</li>
    <li>Relay 2 Status : {{ relay2 }}</li>
    <li>Relay 3 Status : {{ relay3 }}</li>
    <li>Relay 4 Status : {{ relay4 }}</li>
    <h2>Raspi 3</h2>
    <li>Serial Status : {{ serial_raspi3 }}</li>
    <li>Temp Status : {{ temp_raspi3 }}</li>
    <li>Raspi Status : {{ reboot_system }}</li>
    <v-btn class="ma-2" outlined color="error" @click="reboot">reboot</v-btn>
    <v-btn class="ma-2" outlined color="error" @click="shutdown">shutdown</v-btn>
    <h2>Raspi Zero</h2>
      <li>Serial Status : {{ serial_zero }}</li>
      <li>Temp Status : {{ temp_zero }}</li>
  </div>
</template>

<script>

export default {
  name: "control",
  data() {
    return {
      relay1: this.relay1,
      relay2: this.relay2,
      relay3: this.relay3,
      relay4: this.relay4,
      reboot_system: this.reboot_system,
      temp_raspi3: this.temp_raspi3,
      temp_zero: this.temp_zero,
      serial_zero: this.serial_zero,
      serial_raspi3: this.serial_raspi3
    };
  },
  mqtt: {
    "relay-1-on": function(val) {
      var relay1 = new TextDecoder("utf-8").decode(val);
      this.relay1 = val;
    },
    "relay-1-off": function(val) {
      var relay1 = new TextDecoder("utf-8").decode(val);
      this.relay1 = val;
    },
    "relay-2-on": function(val) {
      var relay2 = new TextDecoder("utf-8").decode(val);
      this.relay2 = val;
    },
    "relay-2-off": function(val) {
      var relay2 = new TextDecoder("utf-8").decode(val);
      this.relay2 = val;
    },
    "relay-3-on": function(val) {
      var relay3 = new TextDecoder("utf-8").decode(val);
      this.relay3 = val;
    },
    "relay-3-off": function(val) {
      var relay3 = new TextDecoder("utf-8").decode(val);
      this.relay3 = val;
    },
    "relay-4-on": function(val) {
      var relay4 = new TextDecoder("utf-8").decode(val);
      this.relay4 = val;
    },
    "relay-4-off": function(val) {
      var relay4 = new TextDecoder("utf-8").decode(val);
      this.relay4 = val;
    },
    "Home/RPI3/Temp": function(val) {
      var temp_raspi3 = new TextDecoder("utf-8").decode(val);
      this.temp_raspi3 = val;
    },
    "reboot/status/reboot": function(val) {
      var reboot_system = new TextDecoder("utf-8").decode(val);
      this.reboot_system = val;
    },
    "reboot/status/shutdown": function(val) {
      var reboot_system = new TextDecoder("utf-8").decode(val);
      this.reboot_system = val;
    },
    "reboot/status/connect": function(val) {
      var reboot_system = new TextDecoder("utf-8").decode(val);
      this.reboot_system = val;
    },
    "Home/RPI3/serial": function(val) {
      var serial_raspi3 = new TextDecoder("utf-8").decode(val);
      this.serial_raspi3 = val;
    },
    "Home/RPIZero/serial": function(val) {
      var serial_zero = new TextDecoder("utf-8").decode(val);
      this.serial_zero = val;
    },
    "Home/RPIZero/Temp": function(val) {
      var temp_zero = new TextDecoder("utf-8").decode(val);
      this.temp_zero = val;
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
    this.$mqtt.subscribe("Home/RPI3/serial", { qos: 0 });
    this.$mqtt.subscribe("Home/RPI3/Temp", { qos: 0 });
    this.$mqtt.subscribe("Home/RPIZero/serial", { qos: 0 });
    this.$mqtt.subscribe("Home/RPIZero/Temp", { qos: 0 });
    this.$mqtt.subscribe("reboot/status/reboot", { qos: 0 });
    this.$mqtt.subscribe("reboot/status/shutdown", { qos: 0 });
    this.$mqtt.subscribe("reboot/status/connect", { qos: 0 });
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
    },
    reboot() {
      this.$mqtt.publish("raspi/1", "reboot");
    },
    shutdown() {
      this.$mqtt.publish("raspi/1", "shutdown");
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
