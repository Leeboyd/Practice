<template>
    <span class="country-select">
        <button type="button" class="btn-country" @click="toggleCountry = !toggleCountry">
            <span class="iti-flag" v-bind:class="selectedCountry"></span>
            <span>{{selectedCountryName}}</span>
            <span><i class="fa fa-sort" aria-hidden="true"></i></span>
        </button>
        <ul class="country-list" v-show="toggleCountry">
            <!-- 常用國碼列表 -->
            <li v-for="country in FAVCountries" class="country" @click="phonePrefix(country)">
                <div class="flag-box">
                    <div class="iti-flag" v-bind:class="country.iso2"></div>
                    <span class="country-name">{{ country.name }}</span>
                    <span class="dial-code">{{ country.dialCode }}</span>
                </div>
            </li>
        </ul>
    </span>
</template>

<script>
export default {
  data () {
    return {
      toggleCountry: false,
      // country list
      FAVCountries: [{"name":"Taiwan (台灣)","iso2":"tw","dialCode":"886","priority":0,"areaCodes":null},{"name":"Hong Kong (香港)","iso2":"hk","dialCode":"852","priority":0,"areaCodes":null},{"name":"China (中国)","iso2":"cn","dialCode":"86","priority":0,"areaCodes":null},{"name":"Japan (日本)","iso2":"jp","dialCode":"81","priority":0,"areaCodes":null},{"name":"Macau (澳門)","iso2":"mo","dialCode":"853","priority":0,"areaCodes":null},{"name":"Singapore","iso2":"sg","dialCode":"65","priority":0,"areaCodes":null},{"name":"United States","iso2":"us","dialCode":"1","priority":0,"areaCodes":null}],
      // defult
      selectedCountry: 'tw',
      prefix: '+886',
      selectedCountryName: 'Taiwan (台灣)',
    }
  },

  computed: {
      //--------------------------------
      // 去️0，並加國碼前綴
      //--------------------------------
      phone_number: () => this.prefix.concat(this.rawphone.replace(/^0+/, ''))
  },

  methods: {
      //--------------------------------
      //  binding data
      //--------------------------------
      phonePrefixing(country) {
          this.prefix = `+${country.dialCode}`
          this.selectedCountryName = country.name
          this.selectedCountry = country.iso2
          this.toggleCountry = false
      },
  }
}
</script>
