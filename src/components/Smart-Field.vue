<template >
  <div ref="inputParent">
    <label :for="dataName" ref="label"><slot></slot></label>
    <input  @blur="storeData" :type="inputType" ref="input" v-model="inputData.value">
    <p class="input-error-message" v-for="(error, index) in errorMessages" :key="index" >{{ error }}</p>
  </div>
</template>

<script>
import validation from "@/validation";
export default {
  name: "smart-field",
  mixins : [validation],
  props : {
    dataName : String,
    onlyAlpha : Boolean,
    minLength : String,
    maxLength : String,
    email : Boolean,
    required : Boolean,
    smartCheckbox : Boolean,
    group : String,
  },
  data(){
    return {
      inputData : {
        name : this.dataName,
        value : "",
        group : this.group,
      },
      errorMessages : [],
      inputType : "",
      inputRequestedValidations : {}
    }
  },
  created() {
    //define input type according to input name.
    this.dataName === 'password' ? this.inputType = 'password' : this.$props.smartCheckbox ? this.inputType = 'checkbox'
                                                                                              : this.inputType = "text";
    let validationOptions = ["onlyAlpha", "numbers", 'minLength', 'maxLength', "required", "email"]
    //create empty object which is going to be used later when developer creates input fields.
    this.inputRequestedValidations[`${this.dataName}`] = {};
    // differentiating validations from other props and pushing them into validations object.
    Object.keys(this.$props).forEach(prop => {
      if (validationOptions.includes(prop) && (this.$props[`${prop}`] !== false && this.$props[`${prop}`] !== undefined))
      {
        this.inputRequestedValidations[`${this.dataName}`][`${prop}`] = this.$props[`${prop}`];
      }
    });
  },
  mounted() {
    //setting global classes according to user provided names
    this.$refs.input.setAttribute("id", this.dataName);
    this.$refs.input.setAttribute("class", `${this.inputType === 'checkbox' ? 'input-checkbox' : 'input-field'} ${this.dataName}-input`);
    this.$refs.label.setAttribute("class", `input-label ${this.dataName}-label`);
    this.$refs.inputParent.setAttribute("class", `input-wrapper ${this.dataName}-wrapper`);

  },
  methods: {
    storeData() {
      this.$store.commit("createFormData", this.inputData);
      this.$store.commit("userValidationData",this.inputRequestedValidations);
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/style/globals.scss";
</style>