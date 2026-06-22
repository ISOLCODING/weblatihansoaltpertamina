var fs=require('fs');
var h=fs.readFileSync('index.html','utf8');
console.log('Has html:',h.includes('</html>'));
console.log('Has soalData:',h.includes('const soalData'));
var mc=0,pos=0;
while((pos=h.indexOf('```mermaid',pos))!==-1){mc++;pos++;}
console.log('Mermaid count:',mc);
var qc=0;pos=0;
while((pos=h.indexOf('no:',pos))!==-1){qc++;pos++;}
console.log('Soal no: count:',qc);
console.log('File size:',h.length);
