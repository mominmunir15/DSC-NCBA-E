import { useEffect } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

export default function About() {
  useEffect(() => {
    document.title = 'About DSC NCBAE';
    return () => {
      document.title = 'DSC NCBAE';
    };
  }, []);

  return (
    <>
      <header className="site-header max-lg:px-3">
        <Navbar />
      </header>

      <section className="about-hero-image max-lg:px-4 max-lg:mt-4">
        <img
          src="/assets/images/about/about-image.jpeg"
          alt="DSC Group Photo"
          className="max-lg:rounded-2xl max-lg:h-[40vh] max-lg:min-h-[240px]"
        />
      </section>

      <section className="history-text-section max-lg:px-4 max-lg:my-8">
        <h3>OUR HISTORY</h3>
        <h2 className="max-lg:!text-3xl">The Journey So Far</h2>
        <p>
          What started as an official Google Developer Student Club at NCBAE has evolved into something much greater—a dynamic, independent community of visionary builders, thinkers, and problem-solvers.<br /><br />
          From hosting our very first coding workshops to organizing campus-wide hackathons, our journey has always been fueled by one core belief: technology is best learned together. Today, DSC NCBAE is more than just a tech society; it is a launchpad for ambition, a space for boundless curiosity, and a network of students who refuse to stop creating.<br /><br />
          We don&apos;t just write code—we build the future. If you have the drive to learn and the passion to build, you already belong here. Because the best communities aren&apos;t simply found; they are built.
        </p>
      </section>

      <section className="tenure-section">
        <div className="tenure-card tenure-card--profile max-lg:!flex-col max-lg:!h-auto max-lg:rounded-3xl">
          <div className="tenure-image max-lg:!max-w-none max-lg:!flex-none max-lg:w-[calc(100%-1.7rem)] max-lg:mx-auto max-lg:aspect-[4/3] max-lg:!m-3">
            <img src="/assets/images/leadership/maaz.jpeg" alt="Maaz" />
          </div>
          <div className="tenure-info max-lg:px-4 max-lg:pb-6 max-lg:pt-2">
            <h2 className="max-lg:!text-2xl">Maaz</h2>
            <h4>Tenure 25–26</h4>
            <p>
              As the driving force behind our technical initiatives, Maaz ensures that every member is equipped with the skills they need to excel. From leading workshops to architecting our main projects, his passion for code is contagious.<br />
              He believes that hands-on experience is the best teacher, always encouraging peers to build, break, and learn. When he isn&apos;t debugging, he&apos;s actively mentoring juniors.
            </p>
          </div>
        </div>

        <div className="tenure-card reverse max-lg:!flex-col max-lg:!h-auto max-lg:rounded-3xl">
          <div className="tenure-image max-lg:!max-w-none max-lg:!flex-none max-lg:w-[calc(100%-1.7rem)] max-lg:mx-auto max-lg:aspect-[4/3] max-lg:!m-3">
            <img src="/assets/images/leadership/hoorab.jpeg" alt="Hoorab" />
          </div>
          <div className="tenure-info max-lg:px-4 max-lg:pb-6 max-lg:pt-2">
            <h2 className="max-lg:!text-2xl">Hoorab</h2>
            <h4>Tenure 25–26</h4>
            <p>
              Hoorab is the creative backbone of our community, blending aesthetics with seamless user experiences. Her leadership in organizing events brings our vision to life in vibrant detail.<br />
              Whether designing interfaces or managing outreach, her dedication bridges the gap between technology and human connection. She proves that innovation is as much about design as it is about data.
            </p>
          </div>
        </div>

        <div className="tenure-card tenure-card--profile max-lg:!flex-col max-lg:!h-auto max-lg:rounded-3xl">
          <div className="tenure-image max-lg:!max-w-none max-lg:!flex-none max-lg:w-[calc(100%-1.7rem)] max-lg:mx-auto max-lg:aspect-[4/3] max-lg:!m-3">
            <img src="/assets/images/leadership/fras.jpeg" alt="Fras Irfan" />
          </div>
          <div className="tenure-info max-lg:px-4 max-lg:pb-6 max-lg:pt-2">
            <h2 className="max-lg:!text-2xl">Fras Irfan</h2>
            <h4>Tenure 25–26</h4>
            <p>
              Fras oversees our operational strategy, turning ambitious ideas into structured, executed realities. With a sharp eye for management, he keeps the club running efficiently and scaling new heights.<br />
              His ability to coordinate across different teams ensures that no project is left behind. A true problem-solver, Fras is always looking for the next big challenge to conquer.
            </p>
          </div>
        </div>

        <div className="tenure-card reverse max-lg:!flex-col max-lg:!h-auto max-lg:rounded-3xl">
          <div className="tenure-image max-lg:!max-w-none max-lg:!flex-none max-lg:w-[calc(100%-1.7rem)] max-lg:mx-auto max-lg:aspect-[4/3] max-lg:!m-3">
            <img src="/assets/images/leadership/Abd rah.jpeg" alt="Abdul-Raheem" />
          </div>
          <div className="tenure-info max-lg:px-4 max-lg:pb-6 max-lg:pt-2">
            <h2 className="max-lg:!text-2xl">Abdul-Raheem</h2>
            <h4>Tenure 25–26</h4>
            <p>
              Abdul-Raheem is our community architect, constantly fostering engagement and bringing new talent into the fold. His energetic approach to relationship building has expanded our reach immensely.<br />
              He champions an inclusive environment where every voice is heard and valued. Under his guidance, members find not just a tech hub, but a family of forward-thinkers.
            </p>
          </div>
        </div>
      </section>

      <Footer variant="red" />
    </>
  );
}
