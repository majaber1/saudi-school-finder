export type School = {
  id: string; nameAr: string; nameEn: string; city: string; district: string;
  type: "أهلية" | "عالمية" | "حكومية"; curriculum: string; gender: string;
  stages: string[]; annualFee: number; rating: number; reviews: number;
  transport: boolean; specialNeeds: boolean; features: string[];
};

export const schools: School[] = [
  {id:"riyadh-innovation",nameAr:"مدارس الرياض للابتكار",nameEn:"Riyadh Innovation Schools",city:"الرياض",district:"الياسمين",type:"أهلية",curriculum:"المسار السعودي",gender:"بنين وبنات",stages:["ابتدائي","متوسط","ثانوي"],annualFee:28500,rating:4.7,reviews:342,transport:true,specialNeeds:false,features:["STEM","روبوت","تعليم ثنائي اللغة"]},
  {id:"future-international",nameAr:"مدارس المستقبل العالمية",nameEn:"Future International Schools",city:"الرياض",district:"قرطبة",type:"عالمية",curriculum:"أمريكي",gender:"بنين وبنات",stages:["روضة","ابتدائي","متوسط","ثانوي"],annualFee:42000,rating:4.5,reviews:281,transport:true,specialNeeds:true,features:["اعتماد دولي","أنشطة رياضية","دعم تعليمي"]},
  {id:"jeddah-modern",nameAr:"مدارس جدة الحديثة",nameEn:"Jeddah Modern Schools",city:"جدة",district:"الزهراء",type:"أهلية",curriculum:"المسار السعودي",gender:"بنين وبنات",stages:["روضة","ابتدائي","متوسط"],annualFee:24000,rating:4.4,reviews:198,transport:true,specialNeeds:false,features:["مختبرات","نوادٍ طلابية","لغة إنجليزية"]},
  {id:"eastern-academy",nameAr:"أكاديمية الشرقية الدولية",nameEn:"Eastern International Academy",city:"الخبر",district:"العليا",type:"عالمية",curriculum:"بريطاني",gender:"بنين وبنات",stages:["روضة","ابتدائي","متوسط","ثانوي"],annualFee:51000,rating:4.8,reviews:407,transport:true,specialNeeds:true,features:["Cambridge","مرافق حديثة","إرشاد جامعي"]},
  {id:"qassim-learning",nameAr:"مدارس القصيم للتعلم",nameEn:"Qassim Learning Schools",city:"بريدة",district:"النهضة",type:"أهلية",curriculum:"المسار السعودي",gender:"بنين وبنات",stages:["ابتدائي","متوسط"],annualFee:18000,rating:4.2,reviews:116,transport:false,specialNeeds:false,features:["تحفيظ قرآن","فصول صغيرة","تقوية"]},
  {id:"public-model",nameAr:"المدرسة النموذجية الحكومية",nameEn:"Model Public School",city:"الرياض",district:"الملز",type:"حكومية",curriculum:"المسار السعودي",gender:"بنين",stages:["ابتدائي","متوسط"],annualFee:0,rating:4.1,reviews:95,transport:false,specialNeeds:false,features:["تعليم حكومي","أنشطة علمية","مكتبة"]}
];
