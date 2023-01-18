import React from "react";
import { Link } from "react-router-dom";
import "../../Style/StudentDash.css";

const StudentYoutube = () => {
  return (
    <div>
      <ul class="Student-navbar">
        <Link to="/StudentQuiz">
          <li>Weekly Quiz</li>
        </Link>
        <Link to="/StudentYoutube">
          <li>Youtube Links</li>
        </Link>
      </ul>

      <div className="youtube-space">
        <div className="space">
          <h2>Starting informations for beginners</h2>
          <h2>قواعد لعبة الشطرنج للمبتدئين</h2>
          <br />
          <iframe
            width="600"
            height="325"
            src="https://www.youtube.com/embed/wanwz6nYry4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="space">
          <h2>CheckMate With kNight and Bishop</h2>
          <h2>كش مات بملك والفيل والحصان</h2>
          <br />
          <iframe
            width="600"
            height="325"
            src="https://www.youtube.com/embed/KbFpiP0RrjI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="space">
          <h2>CheckMate With kNight and Bishop</h2>
          <h2>كش مات بملك والفيل والحصان</h2>
          <br />
          <iframe
            width="600"
            height="325"
            src="https://www.youtube.com/embed/wM1ABxzpgrA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="space">
          <h2>CheckMate With two Bishops</h2>
          <h2>كش مات بملك و فيلين</h2>
          <br />
          <iframe
            width="600"
            height="325"
            src="https://www.youtube.com/embed/OwlDewcQRSg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="space">
          <h2>CheckMate With a King and a Rook</h2>
          <h2>كش مات بملك ورخ</h2>
          <br />
          <iframe
            width="600"
            height="325"
            src="https://www.youtube.com/embed/WtDdO_YQ9MU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="space">
          <h2>CheckMate With a Queen Vs a kNight</h2>
          <h2>ملك ووزير ضد ملك وحصان </h2>
          <br />
          <iframe
            width="600"
            height="325"
            src="https://www.youtube.com/embed/ioALP9C1tHU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="space">
          <h2>CheckMate With Queen Vs Rook</h2>
          <h2>كيفية الفوز بملك و وزير ضد ملك و رخ</h2>
          <br />
          <iframe
            width="600"
            height="325"
            src="https://www.youtube.com/embed/cr26DDIYt6w"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="space">
          <h2>CheckMate Rook and Bishop Vs Rook</h2>
          <h2>كيفية الفوز بملك بفيل ورخ ضد ملك و رخ</h2>
          <br />
          <iframe
            width="600"
            height="325"
            src="https://www.youtube.com/embed/y2YxBDOl8aI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default StudentYoutube;
