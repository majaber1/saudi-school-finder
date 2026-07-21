import Link from "next/link";
export default function Nav({lang="ar"}:{lang?:"ar"|"en"}){
 const ar=lang==="ar";
 return <nav className="nav"><div className="container nav-inner"><Link className="brand" href={`/${lang}`}>مدرستي AI</Link><div className="links"><Link href={`/${lang}/schools`}>{ar?"المدارس":"Schools"}</Link><Link href={`/${lang}/compare`}>{ar?"المقارنة":"Compare"}</Link><Link href={`/${lang}/advisor`}>{ar?"المستشار الذكي":"AI Advisor"}</Link><Link className="btn btn-light" href={ar?"/en":"/ar"}>{ar?"English":"العربية"}</Link></div></div></nav>
}
