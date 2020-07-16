<template>
  <get-data url="http://localhost:1337/products" :data__.sync="data_">
    <InputLabelField
      _type="number"
      _placeholder="(xx)xxxx-xxxx"
      _label="telefone"
      :v-model="telefone"
      :_model.sync="telefone"
    />
    <InputLabelField _type="number" _altLabel="olá" _label="ola" :v-model="ola" :_model.sync="ola" />

    <!-- <p style="color: #fff">{{telefone}}</p>
    <div :style="style">{{data_[0]}}</div>-->
  </get-data>
</template>

<script>
import GetData from "@/components/get_data/GetData.vue";

import InputLabelField from "@/components/input_fields/InputLabelField.vue";
export default {
  name: "pagePrototype",
  components: {
    GetData,

    InputLabelField
  },
  created() {
    console.log(this.v_models);
  },
  data() {
    return {
      telefone: "",
      v_models: {},
      labels: [
        {
          label: "label1",
          type: "text"
        },
        {
          label: "label2",
          type: "number"
        },
        {
          label: "label3",
          type: "text"
        },
        {
          label: "label4",
          type: "text"
        }
      ],
      style: {
        color: "#fff"
      },
      data_: {}
    };
  }
};
</script>



