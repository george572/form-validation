const formValidation =  {
    data(){
        return {
            validationsLogic : {
                minLength : (value, minLength) => {return value.length > Number(minLength) - 1},
                maxLength : (value, maxLength) => {return value.length < Number(maxLength) + 1},
                //allow only letters a-z A-Z
                onlyAlpha : value =>  /^[a-zA-Z\s]*$/.test(value),
                //allow only Digits 0-9
                onlyDigits : value => /^[0-9]/.test(value),
            },
            CMSErrorMessages : {
              minLength : "minimium lenght is 3",
              maxLength : "maximum length is 5",
              onlyAlpha : "Only letters are allowed"
            },
            //available errors for the input
            errors : {},
        }
    },
    mounted() {
        Object.keys(this.inputRequestedValidations).forEach(key => {
            this.$set(this.errors, key, {touch : false});
        })
    },
    methods : {
        validateForm(data){
            if (this.inputData.value.length === 0) {
                this.errorMessages = [];
            }
            Object.keys(data).forEach((key) => {
                //setting touch property in the beginning to avoid error;
                const validationName = Object.keys(data[key]);
                    const validationValue = Object.values(data[key]);
                    //this for loop checks if developer used custom validation. and if they did, adds this validation
                    //to "validationsLogic" object
                    for(let i = 0; i < validationValue.length; i++){
                        if (typeof validationValue[i] === "function") {
                            this.validationsLogic[validationName[i]] = validationValue[i]
                        }
                    }
                    //this is main loop to create and assign properties to error object, validate and return
                    //true/false to error object, which is used to display error messages.
                    for (let i = 0; i < validationName.length; i++) {
                        this.errors[key][validationName[i]] = this.validationsLogic[validationName[i]](this.inputData.value,
                            validationValue[i]);
                            if (this.errors[key][validationName[i]] === false && !this.errorMessages.includes(this.CMSErrorMessages[validationName[i]]) && this.errors[key].touch === true){
                                this.errorMessages.push(this.CMSErrorMessages[validationName[i]])
                            }
                             if(this.errors[key][validationName[i]] === true && this.errorMessages.includes(this.CMSErrorMessages[validationName[i]]) && this.errors[key].touch === true) {
                                this.errorMessages.splice(this.errorMessages.indexOf(validationName[i]), 1 )
                             }
                    }
                    // //blur
                    this.$refs.input.addEventListener("blur", () => {
                        this.$set(this.errors, key, {touch : true});
                        this.validateForm(this.inputRequestedValidations);
                    })

            })

        }
    },
    watch : {
        'inputData.value' : function()  {
            this.validateForm(this.inputRequestedValidations);
        },
    }
}
export default formValidation;
