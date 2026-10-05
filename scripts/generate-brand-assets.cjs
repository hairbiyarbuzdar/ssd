const fs = require('fs');
const sharp = require('sharp');
const dir = 'public/brand';
fs.mkdirSync(dir, {recursive:true});
const frame = (color) => `<g fill="none" stroke="${color}" stroke-width="5"><path d="M8 8h64v64H8zM40 8v64M8 40h64"/><path d="m17 31 13-13m20 44 13-13" stroke-width="3"/></g>`;
const svg = (w,h,body) => `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="S.S.D">${body}</svg>`;
const wordmark = (color) => svg(460,100,`<g transform="translate(5 10)">${frame(color)}</g><g fill="${color}" font-family="Arial, sans-serif"><text x="102" y="50" font-size="44" font-weight="700" letter-spacing="3">S.S.D</text><text x="104" y="78" font-size="21">Glass and Aluminium</text></g>`);
fs.writeFileSync(`${dir}/logo-light.svg`,wordmark('#ffffff'));
fs.writeFileSync(`${dir}/logo.svg`,wordmark('#14532d'));
const mark = svg(80,80,`<rect width="80" height="80" rx="8" fill="#14532d"/><g transform="translate(8 8) scale(.8)">${frame('#ffffff')}</g>`);
fs.writeFileSync(`${dir}/mark.svg`,mark);
fs.writeFileSync('app/icon.svg',mark);
const letterhead = svg(1200,220,`<rect width="1200" height="220" fill="white"/><g transform="translate(30 30) scale(2)">${frame('#14532d')}</g><g fill="#14532d" font-family="Arial, sans-serif"><text x="230" y="103" font-size="76" font-weight="700" letter-spacing="5">S.S.D</text><text x="234" y="161" font-size="42">Glass and Aluminium</text></g><path d="M30 210h1140" stroke="#14532d" stroke-width="4"/>`);
const thermal = svg(720,200,`<rect width="720" height="200" fill="white"/><g transform="translate(20 35) scale(1.5)">${frame('#000000')}</g><g fill="black" font-family="Arial, sans-serif"><text x="166" y="103" font-size="72" font-weight="700">S.S.D</text><text x="170" y="150" font-size="37">Glass and Aluminium</text></g>`);
const footer = svg(1200,100,`<rect width="1200" height="100" fill="white"/><path d="M30 4h1140" stroke="#14532d" stroke-width="3"/><g text-anchor="middle" fill="#14532d" font-family="Arial, sans-serif"><text x="600" y="46" font-size="28" font-weight="700">S.S.D</text><text x="600" y="79" font-size="22">sg.addsmint.com</text></g>`);
(async()=>{
for (const [name,source] of [['letterhead',letterhead],['thermal',thermal],['footer',footer]]) {
fs.writeFileSync(`${dir}/${name}.svg`,source);
await sharp(Buffer.from(source)).png().toFile(`${dir}/${name}.png`);
}
const png=await sharp(Buffer.from(mark)).resize(32,32).png().toBuffer();
const ico=Buffer.alloc(22); ico.writeUInt16LE(1,2);ico.writeUInt16LE(1,4);ico[6]=32;ico[7]=32;ico.writeUInt16LE(1,10);ico.writeUInt16LE(32,12);ico.writeUInt32LE(png.length,14);ico.writeUInt32LE(22,18);
fs.writeFileSync('app/favicon.ico',Buffer.concat([ico,png]));
})();
