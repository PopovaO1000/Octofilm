import bcrypt from 'bcrypt';
const saltRounds = 10;
export default  async function createHash(pwd){
    let newPwd;
    await bcrypt.hash(pwd, saltRounds).then((hash) => {
        newPwd = hash;
    });
    return newPwd;
}

export async function compareHash(pwd, hash){
    let res;
    await bcrypt.compare(pwd, hash).then((result) => {
        res = result;
    });
    return res;
}