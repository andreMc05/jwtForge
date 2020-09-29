/*
To do:::
create front end UI
gernerate jwt public key
*/

const crypto = require('crypto'),
loc_base64Url = require('base64url'),
base64Key = 'wef34u874wbgwmssdm#W12gfd',
algorithm = 'sha256',
jwtHeader = {
    alg: 'Hs256'
},
jwtPayload = {
    "sub": "1234567890",
    "name": "John Doe",
    "iat": 1516239022
  },
encodedJwtHeader = loc_base64Url.fromBase64( base64Sting(jwtHeader) ),
encodedJwtPayload = loc_base64Url.fromBase64( base64Sting(jwtPayload) );

const signature = encodedJwtHeader+'.'+encodedJwtPayload;
let restult = crypto.createHmac(algorithm, base64Key).update(signature, 'utf8').digest('base64'),
    newJwt = encodedJwtHeader+'.'+encodedJwtPayload+'.'+base64Sting(restult);

restult = loc_base64Url.fromBase64(restult);

console.log('--the signature:', signature, ' --result-- ', restult, ' --new JWT-- ', newJwt);

function base64Sting(source){
    let encodeSource = new Buffer.from(JSON.stringify(source).toString('base64')),
    encodeSourceString = encodeSource.toString('base64').replace(/=+$/g, '');
    return encodeSourceString;
}

function base64Sting(source){
    let encodeSource = new Buffer.from(JSON.stringify(source).toString('base64')),
    encodeSourceString = encodeSource.toString('base64').replace(/=+$/g, '');
    return encodeSourceString;
}