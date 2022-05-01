
function displayPhoneNumber (phoneNumber){
    /* this function display the phone number in the format (xxx) xxx-xxxx */

    if(!phoneNumber) return "";

    /* Cases */
    /* 1. Phone number starts with 0 */
    if(phoneNumber.startsWith("0")){
        phoneNumber = phoneNumber.slice(1);
        return phoneNumber.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, '0 ($1) $2 $3 $4');
    }
    /* 2. Phone number starts with +90 */
    if(phoneNumber.startsWith("+90")){
        phoneNumber = phoneNumber.slice(3);
        return phoneNumber.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, '0 ($1) $2 $3 $4');
    }
    /* 3. Phone number starts with 90 */
    if(phoneNumber.startsWith("90")){
        phoneNumber = phoneNumber.slice(2);
        return phoneNumber.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, '0 ($1) $2 $3 $4');
    }
    /* 4. Phone number starts with 5 or 3 */
    if(phoneNumber.startsWith("5") || phoneNumber.startsWith("3")){
        return phoneNumber.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, '0 ($1) $2 $3 $4');
    }
    /* 5. Phone number is not a Turkish phone number or does not follow the rules above */
    return phoneNumber;
}

export default displayPhoneNumber;
