const fs = require('fs');
const fetch = global.fetch || require('node-fetch');
(async ()=>{
  const users=['admin','docente','estudiante','tutor'];
  const out={};
  for(const u of users){
    const res = await fetch('http://localhost:3000/api/auth/login',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({username:u,password:'Saa2026!'})});
    const j = await res.json();
    out[u]=j;
  }
  fs.writeFileSync('tokens.json', JSON.stringify(out,null,2));
  console.log('tokens saved to tokens.json');
})().catch(e=>{console.error(e);process.exit(1)});
