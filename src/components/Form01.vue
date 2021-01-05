<template>
  <div>
    <h4>Step1</h4>
    <Form :validation-schema="schema" v-slot="{ errors }" class="form">
      <div>
        <label>名前</label>
        <Field v-model="name" name="name" as="input" placeholder="田中 太郎" />
        <span>{{ errors.name }}</span>
      </div>
      <div>
        <label>電話番号</label>
        <Field v-model="tel" name="tel" as="input" placeholder="080-1234-5678" />
        <span>{{ errors.tel }}</span>
      </div>
      <div>
        <label>メールアドレス</label>
        <Field v-model="email" name="email" as="input" placeholder="example@gmail.com" />
        <span>{{ errors.email }}</span>
      </div>
      <div>
        <label>メルマガの配信</label>
        <Field v-model="picked" name="picked" type="radio" value="必要"></Field>
        <label class="radio_label">必要</label>
        <Field v-model="picked" name="picked" type="radio" value="不必要"></Field>
        <label class="radio_label">不必要</label>
      </div>
      <div>
        <Field v-model="check" name="check" type="checkbox" value="同意"></Field>
        <label class="radio_label">利用規約への同意</label>
      </div>
      <router-link to="/form_zip">次へ</router-link>
    </Form>
  </div>
</template>

<script>
import { Field, Form } from 'vee-validate'
import * as yup from 'yup'

export default {
  data() {
    return {
      schema: yup.object().shape({
        name: yup.string().required(),
        tel: yup.number().required(),
        email: yup.string().required().email(),
      }),
      name: "",
      tel: "",
      email: "",
      picked: "",
      check: ""
    }
  },
  components: {
    Form,
    Field
  },
  mounted() {
    if (localStorage.name) {
      this.name = localStorage.name;
    }
    if (localStorage.tel) {
      this.tel = localStorage.tel;
    }
    if (localStorage.email) {
      this.email = localStorage.email;
    }
    if (localStorage.picked) {
      this.picked = localStorage.picked;
    }
    if (localStorage.check) {
      this.check = localStorage.check;
    }
  },
  watch: {
    name(newName) {
      localStorage.name = newName;
    },
    tel(newTel) {
      localStorage.tel = newTel;
    },
    email(newEmail) {
      localStorage.email = newEmail;
    },
    picked(newPicked) {
      localStorage.picked = newPicked;
    },
    check(newCheck) {
      localStorage.check = newCheck;
    }
  },
}
</script>

<style>
body {
  font-size: 14px;
}

label {
  display: block;
}

div {
  margin-bottom: 24px;
}

span {
  display: block;
  font-size: 12px;
  color: red;
}

.form {
  margin: 24px 0;
}

.radio_label {
  display: inline-block;
}
</style>
