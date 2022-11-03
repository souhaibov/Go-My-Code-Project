import React from 'react'
import '../Style/home.css'

const Home = () => {
  // const info = [{ title: "À propos du club d'échecs de Métouia", description: "Le Club d'Echecs de Métouia est un club sportif culturel et éducatif qui a été créé en 2010 en tant que branche de l'Union sportif de Métouia de Football . Et il est devenu une association indépendante en 2012. Le club d'échecs de Métouia est actif dans le championnat tunisien d'échecs - la première division nationale A - le seul club actif dans cette section de la région sud tunisienne. C'est un club actif dans la formation des jeunes au jeu d'échecs de manière scientifique et académique depuis 2019. Où le nombre de participants actuellement en 2022 dépasse quatre-vingts participants dans trois lieux différents. Quatre groupes s'entraînent au siège du club à Al-Métouia et un groupe au siège de Jeunesse sans frontières à El Maya-Métouia. Et un autre groupe au siège de l'école d'élite de Ghanoush." },
  // { title: "About the Chess Club of Métouia", description: "The Chess Club of Métouia is a cultural and educational sports club that was established in 2010 as a branch of the Football Association. And it became an independent association in 2012. The Chess Club of Métouia is active in the Tunisian Chess League Championship - the National Premier Division A - the only club active in this section of the southern Tunisian region. It is an active club in the formation of young people in the game of chess in a scientific and academic way since 2019. Where the number of participants currently in 2022 exceeds eighty participants in three different places. Four groups are training at the club's headquarters in Al-Métouia and one group at the Youth Without Borders headquarters in El Maya-Métouia. And another group at the headquarters of the elite school in Ghannouch." },
  // { title: "نبذة عن نادي الشطرنج بالمطوية", description: "نادي الشطرنج بالمطوية هو ناد رياضي ثقافي تربوي تأسس سنة 2010 كفرع للإتحاد الرياضي المطوي لكرة القدم. و أصبح حمعية مستقلة بذاتها سنة 2012. ينشط نادي الشطرنج بالمطوية في بطولة الدوري التونسي للشطرنج -  القسم الوطني الممتاز أ - النادي الوحيد الناشط في هذا القسم من منطقة الجنوب التونسي. وهو ناد نشط في تكوين الناشئة في لعبة الشطرنج بطريقة علمية وأكاديمية منذ سنة 2019 . حيث يفوق عدد المتكونين حاليا في سنة 2022 الثمانين مشارك في ثلاث أماكن مختلفة. أربع مجموعات تتدرب في مقر النادي بالمطوية ومجموعة بمقر شباب بلا حدود في الماية. ومجموعة أخرى في مقر مدرسة النخبة بغنوش" }]
  // const [index, setIndex] = useState(0)
  return (
    <div className='home'>
      <br />
      <h1>Chess Club of Métouia</h1>

      <img src="logo.png" alt="logo" /><br /><br />
      {/* <div className='description_club'>

        <div className='description_fr'>
          <div className='langages'>
            <p onClick={()=>setIndex(0)}> Français </p>
            <p onClick={()=>setIndex(1)}> English </p>
            <p onClick={()=>setIndex(2)}> العربية </p>
          </div>
          <br/>
          <h3>{info[index].title}</h3><br />
          <p>{info[index].description}</p>
        </div>

      </div><br /><br /> */}
      <div className='team_pic'>
        <img style={{ width: "47%", height: "100%" }} src="team1.jpg" alt="team1" />
        <img style={{ width: "47%", height: "100%" }} src="team2.jpg" alt="team2" />
      </div><br /><br />
    </div>
  )
}

export default Home