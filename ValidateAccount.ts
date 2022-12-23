let reg = new RegExp('^[a-z0-9_]{6,}$')

let accountList = ['123abc_', '_abc123', '______', '123456', 'abcdefg', '.@', '12345', '1234_', 'abcde ']

for (let account of accountList) {
    if (reg.test(account)) {
        console.log(account + ' is valid')
    } else {
        console.log(account + ' is invalid')
    }
}