import Nav from "../../components/navBar/Nav";
import "./photoshop.css";

// import VideoBackground from "../../components/videoBack/VideoBack";

export default function Photoshop() {
  return (
    <>
      <div className="video-container">
        <video autoPlay loop muted playsInline className="video-background">
          <source src="https://i.imgur.com/hkzEp0v.mp4" type="video/mp4" />
          Seu navegador não suporta vídeos em HTML5.
        </video>
      </div>

      <main>
        <header>
          <Nav />
        </header>

        <section className="sessao-1">
          <div className="box">
            <div className="boxinha">
              <h1>Página photoshop</h1>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
