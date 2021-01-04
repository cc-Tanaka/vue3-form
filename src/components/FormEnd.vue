<template>
  <h3>送信完了</h3>
  <h4>送信した内容は以下</h4>
  <p>名前: {{ result_name }}</p>
  <p>電話番号: {{ result_tel }}</p>
  <p>メールアドレス: {{ result_email }}</p>
  <p>メルマガの配信: {{ result_picked }}</p>
  <p>利用規約への同意: {{ result_check }}</p>
  <p>郵便番号: {{ result_zip }}</p>
  <p>都道府県: {{ result_pref }}</p>
  <p>住所1: {{ result_addr_level2 }}</p>
  <p>住所2: {{ result_addr_level3 }}</p>
  <p>以下の住所: {{ result_home_address }}</p>
</template>

<script>
export default {
  data() {
    return {
      result_name: "",
      result_tel: "",
      result_email: "",
      result_picked: "",
      result_check: ""
    }
  },
  mounted() {
    this.result_name = localStorage.getItem('name')
    this.result_tel = localStorage.getItem('tel')
    this.result_email = localStorage.getItem('email')
    this.result_picked = localStorage.getItem('picked')
    this.result_zip = localStorage.getItem('zip')
    this.result_pref = localStorage.getItem('pref')
    this.result_addr_level2 = localStorage.getItem('addr_level2')
    this.result_addr_level3 = localStorage.getItem('addr_level3')
    this.result_home_address = localStorage.getItem('home_address')
  }
}
</script>
