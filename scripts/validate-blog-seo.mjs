import fs from "node:fs";
const cms=JSON.parse(fs.readFileSync("data/cms.json","utf8"));
const guides=cms.posts.filter(p=>p.id.startsWith("guide-") && p.status==="published");
const errors=[];
if(guides.length!==8)errors.push(`Expected 8 guides, found ${guides.length}`);
const allPublished=cms.posts.filter(p=>p.status==="published");
for(const key of ["slug","id"]){const seen=new Set();for(const p of allPublished){if(seen.has(p[key]))errors.push(`Duplicate published ${key}: ${p[key]}`);seen.add(p[key]);}}
for(const p of guides){
 const words=p.content.trim().split(/\s+/).length;
 if(words<550)errors.push(`${p.slug}: only ${words} words (minimum 550)`);
 if(p.title.length>75)errors.push(`${p.slug}: title >75 chars`);
 if(p.excerpt.length<70 || p.excerpt.length>165)errors.push(`${p.slug}: excerpt outside 70-165 chars`);
 if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(p.slug))errors.push(`${p.slug}: invalid slug`);
 if(!p.imageUrl?.startsWith("/images/blog/") || !fs.existsSync("public"+p.imageUrl))errors.push(`${p.slug}: missing image`);
 if(!p.imageAlt || p.imageAlt.length<45)errors.push(`${p.slug}: missing descriptive image alt`);
 if((p.content.match(/^## /gm)||[]).length<9)errors.push(`${p.slug}: insufficient structured headings`);
 if(!p.content.includes("## Frequently asked questions"))errors.push(`${p.slug}: missing FAQ`);
 if((p.relatedLinks||[]).length<2)errors.push(`${p.slug}: insufficient related links`);
 for(const link of p.relatedLinks||[]){if(!link.href.startsWith("/") || link.href.startsWith("//"))errors.push(`${p.slug}: unsafe related link ${link.href}`);}
 if(Number.isNaN(Date.parse(p.publishedAt)) || Number.isNaN(Date.parse(p.updatedAt)))errors.push(`${p.slug}: invalid dates`);
 console.log(`${p.slug}: ${words} words`);
}
if(errors.length){console.error(errors.join("\n"));process.exitCode=1;}else{console.log("Eight blog SEO editorial checks passed.");}
