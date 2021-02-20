<template>
    <div class="parent">
        <div class="form-wrapper">
            <smartField dataName="firstName" minLength="3" maxLength="5" onlyAlpha>First Name</smartField>
            <smartField dataName="email" minLength="3" maxLength="5" onlyAlpha >Last Name</smartField>
            <smartField dataName="password" minLength="3" maxLength="5" onlyAlpha >Password</smartField>
            <smartField dataName="newsletter" smartCheckbox >Receive Email News</smartField>
            <smartField dataName="agreeonTerms" smartCheckbox >I Agree or Terms & Conditions</smartField>

            <button @click="show" class="submit-button">SUBMIT</button>
            <div v-if="data" class="data">
                <h2>data for back-end</h2>
                <pre>{{data}}</pre>
            </div>
        </div>
        <div class="how-it-works">
            <div class="code-block">
                <h2>Custom ფორმის კომპონენტი smartField</h2>
                <p>Custom კომპონენტი Smartfield იღებს პროპებს</p>
                <p>პირველად იწერება dataName, რაც არის ველის სახელწოდება.
                    ველის სახელწოდების განსაზღვრის შემდეგ, იწერება ის ვალიდაციები, რა ვალიდაციებიც ველმა უნდა გაიაროს ( ამ შემთხვევაში minLength, maxLength და OnlyAlpha)</p>
                <p>
                    ვალიდაცია ხდება OnBlur ლოგიკით, რაც იმას ნიშნავს, რომ როცა მომხმარებელი წერს ველში რამეს, მომენტალურად
                    არ ხდება ვალიდაცია, არამედ მას შემდეგ, რაც იგი შემდეგ ველზე გადავა.
                </p>
                <p>
                    შემდეგ ველზე გადასვლისას თუ აღმოჩნდა რომ ველმა ვალიდაცია ვერ გაიარა, და მომხმარებელი მოუბრუნდა ველს, რათა შეცდომა გამოასწოროს, წერის მომენტში მომენტალურად მუშაობს ვალიდაცია.
                    გთხოვთ, სცადოთ დაწეროთ ორი ასო <i>( რადგან ვალიდაციაში მითითებულია, რომ მინიმუმ სამი ასო უნდა ეწეროს ველში)</i>, შემდეგ გადახვიდეთ სხვა ველზე, და როდესაც ორ ასოიან ველზე შეცდომას იხილავთ, ეცადეთ გამოასწოროთ შეცდომა და დაამატეთ ტექსტი.
                    იხილავთ, რომ ვალიდაციამ ამ შემთხვევაში მომენტალურად იმუშავა.
                </p>

                <img src="@/assets/img/code.png" alt="">
                <p>მინიმალური კოდის დაწერის შემდეგ, მივიღეთ ველი, რომელსაც ვალიდაცია აქვს. იგი ასევე დაგენერირდა დინამიური კლასებით :</p>
                <img src="@/assets/img/class.png" alt="">
                <p>როგორც სურათშიაც ჩანს, კომპონენტში შემავალ ყველა HTML ელემენტს მოჰყვება ზოგადი და უნიკალური კლასი, რაც მათ ხელმისაწვდომობას დამატებითი სტილებისათვის ამარტივებს.</p>
                <pre>
       <i class="highlight">ზოგადი კლასი</i>   <i class="highlight" >უნიკალური კლასი ( კლასის სახელი დაგენერირებულია dataName ატრიბუტიდან გამომდინარე)</i>
class="<i class="highlight">input-wrapper</i>   <i class="highlight">firstName-wrapper</i>"
                </pre>
                <p>ველის ტიპი პაროლი უნდა იყოს, ტექსტი თუ ჩექბოქსი, მარტივად სამართავია. </p>
                <p>თუ გვჭირდება, რომ ველის input-ის ტიპი იყოს პაროლი, საკმარისია dataName-ში დავწეროთ password </p>
                <img src="@/assets/img/password.png" alt="">
                <p>ხოლო თუ გვჭირდება, რომ ველის input-ის ტიპი იყოს ჩექბოქსი, ატრიბუტად დავუწერთ smartCheckbox</p>
                <img src="@/assets/img/checkbox.png" alt="">
                <p>ველების შევსების შემდეგ, დააწექით SUBMIT ღილაკს. იხილავთ, რომ ველებში შევსებული ინფორმაცია შეიკრიბება, და ისეთი სახით წარმოდგება, რომ უკვე მზად არის Back-ში მონაცემების გასაგზავნად.
                </p>
                <img src="@/assets/img/data.png" alt="">
                <p>ტესტირების პროცესების გამო, უფლებას ვტოვებ რომ ვალიდაციის გაუვლელობის შემთხვევაშიც მივცე საშუალება მომხმარებელს SUBMIT ღილაკზე დაჭერის შემდეგ იხილოს შედეგი. ასე რომ მნიშვნელობა არ აქვს
                ველებს ვალიდურად შეავსებთ თუ არა.</p>
                <p>როგორც ჩანს, ყველა მონაცემი ერთ სივრცეშია გაერთიანებული, თუმცა ხშირად ხდება, რომ მაგალითად სიახლეების გამოწერა და წესებზე და პირობებზე დათანხმება, ცალკე ობიექტში არის წარმოდგენილი.</p>
                <pre>
ესეიგი არა
{
  "firstName": "Giorgi",
  "email": "khutiashvili",
  "password": "password",
  "agreeonTerms": true,
  "newsletter": true
}
არამედ
{
"firstName": "Giorgi",
"email": "khutiashvili",
"password": "password",
"subscriptions": {
    "newsletter": true,
    "agreeonTerms": true
    }
}
            </pre>
                <p>ამ შედეგის მისაღებად, იმ კომპონენტებს, რომლებთა მონაცემების დაჯგუფებაც გვჭირდება, უნდა მივანიჭოთ სპეციალური group ატრიბუტი. ასეთნაირად შეგვიძლია რამდენიც
                    საჭიროა იმდენი მონაცემი გავაერთიანოთ ერთი ჯგუფის სახელწოდების ქვეშ.</p>
                <img src="@/assets/img/group.png" alt="">

                <p>P.S </p>
                <p>გათვლილია, რომ კომპონენტს უნდა დაემატოს მარტივად სამართავი HTTP მოთხოვნები სერვერთან და კიდევ სხვა უამრავი დეტალი. ამიტომ ეს არის Work in Progress, თუმცა ამჟამინდელ მდგომარეობაშიც აკურატულად გადმოსცემს
                ჩემი Vue-ს ცოდნას.</p>
                <a  target="_blank" href="https://github.com/george572/form-validation/tree/code/">პროექტის Github მისამართი</a>
            </div>
        </div>
    </div>

</template>

<script>
import smartField from "@/components/Smart-Field";

    export default {
        name: 'App',
        components: {
            smartField
        },
        data() {
            return {
                data: false,
                customValidations: {
                    myCustomValidation: (value) => value.length > 2,
                },
                //optional
                additionalDataForRequest: {
                    "gender": "male"
                },
                requestChronology: {
                    baseURL: "baseURL",
                    emailVerification: {
                        url : "sad",
                        field: "email",
                        endpoint: "endpoint"
                    },
                    phoneVerification: {
                        field: "firstName",
                        endpoint: "endpoint"
                    },
                    signUpRequest: {
                        endpoint: "endpoint",
                    },
                }
            }
        },
        methods: {
            show() {
                this.data = JSON.stringify(this.$store.state.formData, null, 2)
            }
        }

    }
</script>

<style  lang="scss">
    *  {
        margin: 0;
        padding: 0;
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    .data {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        color: #2c3e50;
        margin-top: 60px;
        box-sizing: border-box;
        padding: 20px;
    }

    .form-wrapper {
        box-sizing: border-box;
        padding: 20px;
    }
    .submit-button {
        margin-top: 20px;
        width: 100px;
        height: 35px;
        border-radius: 5px;
        background: #2b3d79;
        color: white;
        line-height: 35px;
        border: none;
        outline: none;
        cursor: pointer;
        transition: all 200ms;
        &:hover {
            background: #5fb05f;
            transition: all 200ms;
         }

    }
    .parent {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
    .how-it-works {
        width: 50%;
        margin-right: 100px;
    }
    .code-block {
        background:#1E1E1E;
        color: white;
        box-sizing: border-box;
        padding: 50px;
        height: 100vh;
        overflow-y: scroll;
        &::-webkit-scrollbar {
            display: none;
        }
        p {
            margin:15px 0;
        }
        img {
            max-width: 100%;
        }
        a {
            color: #e25d72;
        }
    }
    pre {
        max-width: 100%;
    }
    .highlight {
        font-size: 12px;
        color: #61ab61;
    }

</style>
