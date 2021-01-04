<template>
  <h4>住所入力</h4>
  <div>
    <Form :validation-schema="schema" v-slot="{ errors }" class="form">
      <div>
        <label>郵便番号</label>
        <Field v-model="zip" name="zip" as="input" placeholder="921-8052" />
        <button @click="searchAddress" class="zip-button">郵便番号検索</button>
        <span>{{ errors.name }}</span>
      </div>
      <div>
        <label>都道府県</label>
        <Field v-model="pref" name="pref" as="input" placeholder="石川県" />
        <span>{{ errors.name }}</span>
      </div>
      <div>
        <label>住所1</label>
        <Field v-model="addr_level2" name="addr_level2" as="input" placeholder="金沢市" />
        <span>{{ errors.name }}</span>
      </div>
      <div>
        <label>住所2</label>
        <Field v-model="addr_level3" name="addr_level3" as="input" placeholder="鉾" />
        <span>{{ errors.name }}</span>
      </div>
      <div>
        <label>以下の住所</label>
        <Field v-model="home_address" name="home_address" as="input" placeholder="2-154" />
        <span>{{ errors.name }}</span>
      </div>
    </Form>
  </div>
  <router-link to="/form_end">送信</router-link>
</template>

<script>
import { Field, Form } from 'vee-validate'
import * as yup from 'yup'

import Feacher from "../lib/zip.js"

export default {
  data() {
    return {
      schema: yup.object().shape({
        zip: yup.string().required(),
        pref: yup.string().required(),
        addr_level2: yup.string().required(),
        addr_level3: yup.string().required(),
        home_address: yup.string().required(),
      }),
      zip: "",
      pref: "",
      addr_level2: "",
      addr_level3: "",
      home_address: ""
    }
  },
  components: {
    Form,
    Field
  },
  methods: {
    async searchAddress() {
      const feacher = new Feacher
      let address = await feacher.feach(this.zip)
      this.pref = address.data.results[0]["address1"]
      this.addr_level2 = address.data.results[0]["address2"]
      this.addr_level3 = address.data.results[0]["address3"]
    }
  },
  mounted() {
    if (localStorage.zip) {
      this.zip = localStorage.zip;
    }
    if (localStorage.pref) {
      this.pref = localStorage.pref;
    }
    if (localStorage.addr_level2) {
      this.addr_level2 = localStorage.addr_level2;
    }
    if (localStorage.addr_level3) {
      this.addr_level3 = localStorage.addr_level3;
    }
    if (localStorage.home_address) {
      this.home_address = localStorage.home_address;
    }
  },
  watch: {
    zip(newZip) {
      localStorage.zip = newZip;
    },
    pref(newPref) {
      localStorage.pref = newPref;
    },
    addr_level2(newAddrLevel2) {
      localStorage.addr_level2 = newAddrLevel2;
    },
    addr_level3(newAddrLevel3) {
      localStorage.addr_level3 = newAddrLevel3;
    },
    home_address(newHomeAddress) {
      localStorage.home_address = newHomeAddress;
    }
  },
}
</script>

<style>
.zip-button {
  font-size: 11px;
  margin-left: 8px;
}

</style>