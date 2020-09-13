<template>
  <div app="control">
    <h1>FaSAC Controller</h1>
    <h3>Pump 1</h3>
    <v-btn class="ma-2" color="error" outlined @click="light_1on">On</v-btn>
    <v-btn class="ma-2" outlined color="indigo" @click="light_1off">Off</v-btn>
    <h3>Pump 2</h3>
    <v-btn class="ma-2" color="error" outlined @click="light_2on">On</v-btn>
    <v-btn class="ma-2" outlined color="indigo" @click="light_2off">Off</v-btn>
    <h3>Pump 3</h3>
    <v-btn class="ma-2" color="error" outlined @click="light_3on">On</v-btn>
    <v-btn class="ma-2" outlined color="indigo" @click="light_3off">Off</v-btn>
    <h3>Pump 4</h3>
    <v-btn class="ma-2" color="error" outlined @click="light_4on">On</v-btn>
    <v-btn class="ma-2" outlined color="indigo" @click="light_4off">Off</v-btn>
    <!-- <h3>Check Status : {{ relay }}</h3>
    <v-card class="mx-auto" max-width="344">
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">pH</div>
          <v-list-item-title class="headline mb-1">{{ msg }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-card> -->
  </div>
</template>

<script>
export default {
  name: "control",
  data() {
    return {
      relay: "",
      msg: "",
      message: []
    };
  },
  created() {
    // subscibe
    this.$mqtt.subscribe("test/ip", this.onMsg);
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
    // onMsg(topic) {
    //   console.log(topic);
    //   this.message.push(topic);
    // }
  }
};
</script>

<style></style>
