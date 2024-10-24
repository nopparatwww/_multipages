import "./Home.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";

function Home() {
  return (
    
    <div className="home-container">
      <div>
        <img src="/public/Profile.jpg" alt="" className="home-img" />
      </div>
      <div className="home-content">
        <div className="home-text">
          <h2>I'm Nopparat Suwanna</h2>
          <p style={{ textAlign: "left", width: "300px" }}>
            My nickname is Klao . I'm 20 years old . My student ID is 66068773 .
            I’m a dedicated Full Stack Development student with a passion for
            building user-friendly and efficient web applications. I’m
            continuously working on enhancing my skills and taking on new
            projects to broaden my knowledge in both front-end and back-end
            development.
          </p>
          <a href="https://github.com/nopparatwww" className="btn btn-outline-dark bi bi-github"></a>
        </div>
      </div>
    </div>
  );
}

export default Home;
