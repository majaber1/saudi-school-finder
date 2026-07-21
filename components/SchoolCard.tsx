import type { School } from "@/data/schools";
export default function SchoolCard({school,lang="ar"}:{school:School;lang?:"ar"|"en"}){
 const name=lang==="ar"?school.nameAr:school.nameEn;
 return <article className="card"><span className="badge">{school.type}</span><h3 className="school-title">{name}</h3><div className="meta"><span>{school.city} - {school.district}</span><span>{school.curriculum}</span><span>{school.gender}</span></div><p>{school.features.join(" • ")}</p><div className="meta"><span className="rating">★ {school.rating}</span><span>{school.reviews} تقييم</span><span>{school.transport?"نقل متوفر":"بدون نقل"}</span></div><div className="price">{school.annualFee?`${school.annualFee.toLocaleString("ar-SA")} ر.س / سنويًا`:"مجانية"}</div></article>
}
