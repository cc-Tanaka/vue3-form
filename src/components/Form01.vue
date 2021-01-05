<template>
  <div>
    <h4>Step1</h4>
    <Form :validation-schema="schema" v-slot="{ handleSubmit, errors }" class="form">
      <div>
        <label>名前</label>
        <Field label="名前" v-model="name" name="name" as="input" placeholder="田中 太郎" rules="required"/>
        <span>{{ errors.name }}</span>
      </div>
      <div>
        <label>電話番号</label>
        <Field label="電話番号" v-model="tel" name="tel" as="input" placeholder="080-1234-5678" rules="required|numeric"/>
        <span>{{ errors.tel }}</span>
      </div>
      <div>
        <label>メールアドレス</label>
        <Field label="メールアドレス" v-model="email" name="email" as="input" placeholder="example@gmail.com" rules="required|email"/>
        <span>{{ errors.email }}</span>
      </div>
      <div>
        <label>メルマガの配信</label>
        <Field v-model="picked" name="picked" type="radio" value="必要"></Field>
        <label class="radio_label">必要</label>
        <Field v-model="picked" name="picked" type="radio" value="不必要"></Field>
        <label class="radio_label">不必要</label>
        <span>{{ errors.picked }}</span>
      </div>
      <div>
        <Field v-model="check" name="check" type="checkbox" value="同意" :modelvalue="false"></Field>
        <label class="radio_label">利用規約への同意</label>
        <span>{{ errors.check }}</span>
      </div>
      <button @click="handleSubmit(next)">次へ</button>
    </Form>
  </div>
</template>

<script>
import { Field, Form, defineRule, configure } from 'vee-validate'
import { required, email, numeric } from '@vee-validate/rules';
import { setLocale, localize } from '@vee-validate/i18n';
import ja from '@vee-validate/i18n/dist/locale/ja.json';


defineRule('required', required);
defineRule('email', email);
defineRule('numeric', numeric);

configure({
  generateMessage: localize({
    ja
  }),
});

setLocale('ja');


export default {
  data() {
    return {
      schema: {
        picked: (value) => {
          if(value) {
            return true;
          }
          return '必須項目です'
        },
        check: (value) => {
          if(value && !undefined) {
            return true;
          }
          return '利用規約へ同意してください'
        },
      },
      name: "",
      tel: "",
      email: "",
      picked: "",
      check: "",
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
  methods: {
    next() {
      this.$router.push('form_zip')
    }
  }
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
