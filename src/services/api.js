export const submitForm = async (data) => {

await fetch("YOUR_GOOGLE_SCRIPT_URL",{

method:"POST",

body:JSON.stringify(data)

})

}