import Nav from "../../components/navBar/Nav";
import "./photoshop.css";

import VideoBackground from "../../components/videoBack/VideoBack";
import CardContent from "../../components/card/Card";

export default function Photoshop() {
  return (
    <>
      <VideoBackground />

      <main>
        <header>
          <Nav />
        </header>

        <section className="sessao-1">
          <div className="box">
            <div className="boxinha">
              <h1>Página photoshop</h1>
            </div>
            <div className="content">
              <CardContent />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
