import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import front from './front.gif'
import Chart from "react-apexcharts";


function App() {
  const state = {
    options: {
      title: {
        text: 'Company Performance',
        align: 'center',
        margin: 100,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize:  '30px',
          fontWeight:  'bold',
          fontFamily:  "'Caveat', cursive",
          color:  '#330533'
        },
    },
      theme: {
        mode: 'light', 
        palette: 'palette6', 
        monochrome: {
            enabled: true,
            color: '#662E9B',
            shadeTo: 'dark',
            shadeIntensity: 0.65
        },
    },
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: ['2016 Q1', '2016 Q2', '2016 Q3', '2016 Q4','2017 Q1', '2017 Q2', '2017 Q3', '2017 Q4','2018 Q1', '2018 Q2', '2018 Q3', '2018 Q4','2019 Q1', '2019 Q2', '2019 Q3', '2019 Q4', '2020 Q1', '2020 Q2', '2020 Q3', '2020 Q4']
      }
    },
    series: [
      {
        name: "in millions",
        data: [13, 17, 20, 25, 23, 35, 30, 40, 45, 50, 64, 65, 70, 84, 79, 81, 75, 83, 86, 92]
      }
    ]
  };

  return (
    <div className="App sm">
      <div className="top-panel ">
        <nav className="navbar navbar-expand navbar-light bg-light justify-content-between ">
          <a className="navbar-brand brand" href="/">Stock Eater</a>
          <div className="navbar-nav d-inline-flex links">
            <div className="nav-item">
              <a className="nav-link" href="/">SignUp</a>
            </div>
            <div className="nav-item">
              <a className="nav-link" href="/">Login</a>
            </div>
          </div>
        </nav>
        <div className="cont">
          <div className="banner">
            <img className="front" src={front} alt="front"/>
            <p className="banner-text">``The best investment strategy is to follow a strategy`` - <span>Sukresh, Co founder Dumb Minds</span></p>
          </div>
          <div className="growth-chart">
            <Chart
              options={state.options}
              series={state.series}
              type="bar"
              width="700"
            />
          </div>
          <div className="about">
            <div className="container">
              <p>``We are the best in industry to follow up the stocks and predict the future prices and make your portfolio stronger and reliable.
                The way we look at the stocks is different from what others see, we use Deep Learning and AI to make our results consistant and strong`` - <span>Charan Kumar, CEO Dumb Minds</span>
              </p>
            </div>
          </div>
          <div className="footer container">
            <div className="abouts-links d-flex row">
              <div className="abouts col-7">
                <p className="about-about">About</p>
                <p className="about-data">Stock Eater is a simple project that aims to read stock data and analyse using machine learning and deep learning and will try to predict future with the help of neural networks.</p>
              </div>
              <div className="links col">
                <p className="about-about">Links</p>
                <ul className="bottom p-0 m-0">
                  <li className="htl"><a href="/">Home</a></li>
                  <li className="htl"><a href="/">About</a></li>
                  <li className="htl"><a href="/">Motto</a></li>
                  <li className="htl"><a href="/">Chart</a></li>
                </ul>
              </div>
            </div>
            <div className="copyright-social">
              <div className="copyright">
                <p>copyright @2021 All Rights Reserved to Dumb Minds</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
