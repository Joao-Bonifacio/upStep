export default function veryfyPassword({val}){
    window.addEventListener('load',()=>{
        const password = document.querySelector('input[name=password]')
        const cpassword = document.querySelector('input[name=cpassword]')

        if (cpassword.value === password.value) {
            cpassword.setCustomValidate('')
        }else{
            cpassword.setCustomValidate('Not same')
        }
    })  
}