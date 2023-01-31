import React, { useState } from "react"
import '../Style/About.css'


const About = () => {
 

  const info = [
  { title: "À propos du club d'échecs de Métouia", 
  description: "Le Club d'Echecs de Métouia est un club sportif culturel et éducatif qui a été créé en 2010 en tant que branche de l'Union sportif de Métouia de Football . Et il est devenu une association indépendante en 2012. Le club d'échecs de Métouia est actif dans le championnat tunisien d'échecs - la première division nationale A - le seul club actif dans cette section de la région sud tunisienne. C'est un club actif dans la formation des jeunes au jeu d'échecs de manière scientifique et académique depuis 2019. Où le nombre de participants actuellement en 2022 dépasse quatre-vingts participants dans trois lieux différents. Quatre groupes s'entraînent au siège du club à Al-Métouia et un groupe au siège de Jeunesse sans frontières à El Maya-Métouia. Et un autre groupe au siège de l'école d'élite de Ghanoush." ,
  info:"Informations du club",
  rib:"R.I.B / ATB : 01087119111200207367",
  tax:"Matricule fiscale : 1544293/J",
  mail:"Courriel : chess.metouia@gmail.com",
  Adress:"Adresse : 26 Rue des martyrs Métouia 6010",
  phone:"Téléphone : +216 29 704 109 / +216 20 212 411"
  },
  { title: "About the Chess Club of Métouia", 
  description: "The Chess Club of Métouia is a cultural and educational sports club that was established in 2010 as a branch of the Football Association. And it became an independent association in 2012. The Chess Club of Métouia is active in the Tunisian Chess League Championship - the National Premier Division A - the only club active in this section of the southern Tunisian region. It is an active club in the formation of young people in the game of chess in a scientific and academic way since 2019. Where the number of participants currently in 2022 exceeds eighty participants in three different places. Four groups are training at the club's headquarters in Al-Métouia and one group at the Youth Without Borders headquarters in El Maya-Métouia. And another group at the headquarters of the elite school in Ghannouch." ,
  info:"Club Information",
  rib:"bank details / ATB : 01087119111200207367",
  tax:"Tax number : 1544293/J",
  mail:"E-mail : chess.metouia@gmail.com",
  Adress:"Address : 26 Rue des martyrs Métouia 6010",
  phone:"Phone number : +216 29 704 109 / +216 20 212 411"
  },
  { title: "نبذة عن نادي الشطرنج بالمطوية", 
  description: "نادي الشطرنج بالمطوية هو ناد رياضي ثقافي تربوي تأسس سنة 2010 كفرع للإتحاد الرياضي المطوي لكرة القدم. و أصبح حمعية مستقلة بذاتها سنة 2012. ينشط نادي الشطرنج بالمطوية في بطولة الدوري التونسي للشطرنج -  القسم الوطني الممتاز أ - النادي الوحيد الناشط في هذا القسم من منطقة الجنوب التونسي. وهو ناد نشط في تكوين الناشئة في لعبة الشطرنج بطريقة علمية وأكاديمية منذ سنة 2019 . حيث يفوق عدد المتكونين حاليا في سنة 2022 الثمانين مشارك في ثلاث أماكن مختلفة. أربع مجموعات تتدرب في مقر النادي بالمطوية ومجموعة بمقر شباب بلا حدود في الماية. ومجموعة أخرى في مقر مدرسة النخبة بغنوش" ,
  info:"معطيات النادي",
  rib:"01087119111200207367 : ATB / الهوية البنكية",
  tax:"1544293/J : المعرف الجبائي",
  mail:"chess.metouia@gmail.com : البريد الإلكتروني",
  Adress:"6010 العنوان : 26 نهج الشهداء المطويةّ",
  phone:"+216 29 704 109 / +216 20 212 411 : الهاتف"  
  },
  { title: "Über den Schachklub von Métouia", 
  description: "Der Schachclub von Métouia ist ein Kultur- und Bildungssportverein, der 2010 als Zweig des Fußballverbandes gegründet wurde. 2012 wurde er zu einem unabhängigen Verband. Der Schachklub von Métouia ist in der tunesischen Schachliga-Meisterschaft – der nationalen Premier-Division A – aktiv und der einzige Klub, der in diesem Teil der südtunesischen Region aktiv ist. Es ist seit 2019 ein aktiver Verein in der Ausbildung junger Menschen im Schachspiel auf wissenschaftlicher und akademischer Weise. Wo die Teilnehmerzahl derzeit im Jahr 2022 achtzig Teilnehmer an drei verschiedenen Orten übersteigt. Vier Gruppen trainieren in der Zentrale des Clubs in Al-Métouia und eine Gruppe in der Zentrale von Jugend ohne Grenzen in El Maya-Métouia. Und eine weitere Gruppe im Hauptquartier der Eliteschule in Ghannouch." ,
  info:"Vereinsinfos",
  rib:"Bankdaten / ATB : 01087119111200207367",
  tax:"Steuernummer : 1544293/J",
  mail:"Email : chess.metouia@gmail.com",
  Adress:"die Anschrift : 26 Straße der Märtyrer Métouia 6010",
  phone:"Telefonnummer : +216 29 704 109 / +216 20 212 411" 
  }
 ]
 
  const [index, setIndex] = useState(0)

  return (
    <div>
      
<div className='description_club'>

<div className='description_fr'>
  <div className='langages'>
    <p onClick={()=>setIndex(0)}> Français </p>
    <p onClick={()=>setIndex(1)}> English </p>
    <p onClick={()=>setIndex(2)}> العربية </p>
    <p onClick={()=>setIndex(3)}> Deutch </p>
  </div>
  <br/>
  <h3>{info[index].title}</h3>
  <p className="description-club">{info[index].description}</p>
  <div className="description-club1">
  <p className="titre">{info[index].info}</p>
  <p>{info[index].rib}</p>
  <p>{info[index].tax}</p>
  <p>{info[index].mail}</p>
  <p>{info[index].Adress}</p>
  <p>{info[index].phone}</p>
  
  <a href='carte identité du CEM.pdf' download='carte identité du CEM.pdf'>
     <button className="description_button">Download the informations </button>
  </a>
  </div>
</div>

</div>
   
    
    </div>
  );
};

export default About;


