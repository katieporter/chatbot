console.log('No value for FOO yet:', process.env.ACCOUNT_SID);

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}

console.log('Now the value for FOO is:', process.env.ACCOUNT_SID);
