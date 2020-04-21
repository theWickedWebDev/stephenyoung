// Dependencies
import React from 'react';
import queryString from 'query-string';

import { Meta } from '@thewickedwebdev/components';

// Styling
import './dee.scss';

const images = [
  `${S3_URL}/fun/frustrated.jpg`, //0
  `${S3_URL}/fun/shocked.jpg`, //1
  `${S3_URL}/fun/smile-2.jpg`, //2
  `${S3_URL}/fun/smile-3.jpg`, //3
  `${S3_URL}/fun/smile.jpg`, //4
  `${S3_URL}/fun/suprised.jpg`, //5
  `${S3_URL}/fun/worried.jpg`, //6
];

// Main
class Dee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: null,
      where: null,
      content: <DefaultContent/>,
      image: null,
    };
  }

  handleSelectionChange({ target: { value }}) {
    console.log(value);
    this.setState({
      selection: value,
      where: '',
    });
  }

  handleOptionChange({ target: { value }}) {
    console.log(value);
    this.setState({
      where: value,
    });
  }

  static pieces() {
    return [
      {
        id: "1",
        selection: 'a time when',
        where: [
          {option: "she enriched us", content: (
              <div>
                <h1>React Boston Conference</h1>
                <p>Thank you Dee for helping us grow the team and the individual</p>
                <br/>
                <img src={`${S3_URL}/fun/stephen/IMG_2628.jpg`} width="100%"/>
              </div>
            ), image: images[3]},
          {option: "she brought us together", content: (
              <div>
                <h1>Design a Sign - Get to know</h1>
                <p>Thank you Dee for helping us grow our team</p>
                <br/>
                <img src={`${S3_URL}/fun/stephen/IMG_0181.jpg`} width="100%"/>
              </div>
            ), image: images[2]},
          {option: "went late to restaurant", content: (
              <div>
                <h1>Guys, its still open!</h1>
                <h2>But be quick it closes in like 10min</h2>
                <br/>
                <img src={`${S3_URL}/fun/stephen/33923073592_d98ef78c6b_o.jpg`} width="100%"/>
              </div>
            ), image: images[6]},
          {option: "didnt test on staging", content: (
              <div className="error-modal">
                <h1>Shit</h1>
                <br/>
                <br/>
                <img src={images[0]} width="300px"/>
                <br/>
                <br/>
                <h4>It's fine, just refresh...</h4>
              </div>
            ) },
          {option: "said the following", content: (
              <div>
                <h1>Funny things Dee has said</h1>
                <ul>
                  <li>If the carcass is on the table, we want to do the right thing.</li>
                  <li>The sausage behind the curtain.</li>
                  <li>Where the devil meets the road.</li>
                  <li>Reaching into the belly-button lint.</li>
                  <li>Bowling pin hula dance!</li>
                  <li>I feel where you're feeling from.</li>
                  <li>Hidden musketeers</li>
                  <li>Sometimes you just gotta make a sandwich.</li>
                </ul>
              </div>
            ) },
          {option: "we couldnt escape!", content: (
              <div>
                <h1>Trapology</h1>
                <br/>
                <img src={`${S3_URL}/fun/IMG_BA326A129CAF-1.jpeg`} width="100%"/>
              </div>
            ), image: images[6]},
          {option: "she wasn't positive", content: (
              <div>
                <h1>A time when Dee wasn't positive?</h1>
                <p>NO - neither can I</p>
              </div>
            ), image: images[3]},
        ],
      },
      {
        id: "2",
        selection: 'a photo/video of',
        where: [
          {option: 'her teaching us to dance', content: (
              <div>
                <h1>Thanks for teaching us your moves!</h1>
                <img src={`${S3_URL}/fun/dee-dance.gif`}/>
              </div>
            ), image: images[4]},
          {option: "Dee's many hats", content: (
              <div>
                <h1>This "hat" is her Serious-Yet-Fun hat</h1>
                <img src={`${S3_URL}/fun/stephen/IMG_6553.jpg`} width="100%"/>
              </div>
            ), image: images[4]},
          {option: "Getting the team together", content: (
              <div>
                <h1>Stand-up, eh em, sorry - Sit Down</h1>
                <img src={`${S3_URL}/fun/PANO_20151218_070326.jpg`} width="100%"/>
                <br/>
                <img src={`${S3_URL}/fun/stephen/IMG_9290.jpg`} width="100%"/>
              </div>
            ), image: images[4]},
          {option: "4th year anniversary party", content: (
              <div>
                <h1>4th year anniversary party at the Polish American Citizens club</h1>
                <img src={`${S3_URL}/fun/IMG_20160107_130037.jpg`} width="100%"/>
              </div>
            ), image: images[4]},
          {option: "Grab for Dollars!", content: (
              <div>
                <h1>The 'grab for dollars' booth at the four year. Jen Davis was the big winner</h1>
                <img src={`${S3_URL}/fun/IMG_20160107_140633.jpg`} width="100%"/>
              </div>
            ), image: images[4]},
          {option: 'the Office Talent Show', content: (
              <div>
                <h1>One of the greatest moments in PN history... the Office Talent Show. This was Cali Hasting's sister who did some Belly Dancing</h1>
                <video width="100%" height="400" controls>
                  <source src={`${S3_URL}/fun/VID_20141219_124313.mp4`} type="video/mp4" />
                </video>
                <video width="100%" height="400" controls>
                  <source src={`${S3_URL}/fun/VID_20141219_123150.mp4`} type="video/mp4" />
                </video>
              </div>
            ), image: images[4]},
          {option: "Xmas 'Grab'", content: (
              <div>
                <h1>Xmas 'Grab'</h1>
                <img src={`${S3_URL}/fun/IMG_20151218_121326.jpg`} width="100%"/>
              </div>
            ), image: images[4]},
          {option: "Having Fun", content: (
              <div>
                <h1>Always fun time when Dee is around!</h1>
                <img src={`${S3_URL}/fun/IMG_6302.jpg`} width="100%"/>
              </div>
            ), image: images[4]},
        ],
      },
      {
        id: '3',
        selection: 'a kind word',
        where: [
          {
            option: 'from Ginny',
            content: (
              <p>I feel so grateful to have gotten to work with Dee over the last year, especially as we’ve worked more closely on the tech team. She is the epitome of hard-working and problem-solving, always figuring out a way to make things happen. She’s usually the first one in the office in the morning, and often late to leave (and she seems to always be on Slack!). She’s happy to drop what she’s doing to help out, transfer knowledge, and put the pieces of any puzzle together. Harvard will be lucky to have her! I hope we can keep in touch!</p>
            ),
          },
          {
            option: 'from Stephen',
            content: (
              <p>Just wanted to say that I always appreciated the small tokens of appreciation you would send us in the mail. Such as anniversaries or birthdays. You always put in the extra "umph" to make us feel appreciated and important. Thank you :)</p>
            ),
          },
        ]
      }
    ];
  }

  executeQuery() {
    const selection = Dee.pieces().find(p => p.id === this.state.selection);
    const content = selection.where.find(w => w.option === this.state.where);
    console.log('execute', selection, content, this.state);
    this.setState({ content: content.content, image: content.image })
  }

  render() {
    const { location } = this.props;
    const { selection, where, content, image } = this.state;
    const parsed = queryString.parse(location.search);

    const currentSelection = Dee.pieces().find((p) => p.id === selection);

    console.log({
      location,
      parsed,
      selection,
      content,
      where,
      pieces: Dee.pieces(),
      currentSelection,
    });

    return (
      <div className="DeeFun">
        <Meta
          robots="noindex"
          title="We're Going to Miss you Dee!"
          image="https://cdn.thewickedweb.dev/fun/smile.jpg"
        />
        <div className="body">
          <table>
            <thead>
            <tr style={{border: '6px groove', backgroundColor: '#fff'}}>
              <th colSpan="2">
                <marquee>Welcome to my site!!!!!!!!!!!!!!!!!!!!!!!!!! We are going to miss you Dee and we wish you all the luck in the world!!!!!!!!!!!!! !!!!! <small>(need more exclamation points)</small>!!!!!!!!!!!!!!!!   !!!!!!!!!!  !!!! !!!!!!!!!  !!!!!!! ! !!!!!</marquee>
              </th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td rowSpan="0" className="sidebar">
                <a href="#" onClick={() => this.setState({
                  selection: -1,
                  where: -1,
                })}>Home</a>
                <h1>Dee-tabase</h1>
                <p><strong>Manual</strong> Entry</p>
                <span>Environment</span>
                <h3>Production</h3>
                <p>**All Permissions Granted**</p>
                <br/>
                <p>select</p>
                <select
                  onChange={this.handleSelectionChange.bind(this)}
                >
                  <option value="">-</option>
                  { Dee.pieces().map((o, key) => (
                    <option key={key} value={o.id}>{o.selection}</option>
                  ))}
                </select>
                <p>from</p>
                <select>
                  { currentSelection && <option>The DEEtabase</option> }
                </select>
                <p>where</p>
                <select
                  onChange={this.handleOptionChange.bind(this)}
                  value={where}
                >
                  <option value="">-</option>
                  { currentSelection && currentSelection.where
                    .map((w, key) => (
                      <option key={key} value={w.option}>{w.option}</option>
                    ))
                  }
                </select>
                <br/>
                <br/>
                <button onClick={this.executeQuery.bind(this)}>Execute</button>
                <br/>
                <br/>
                { image ? <img src={image} width="100%"/> : null }
              </td>
              <td className="main-content">
                {content}
                <br/>
                <hr/>
                <br/>
                <div className="center">
                  <p style={{fontSize: '20px'}}>
                    This site has been viewed
                    <br/>
                    <img src={`${S3_URL}/fun/hit-counter.jpg`} width="150px"/>
                    <br/>
                    times!
                  </p>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
};

const DefaultContent = () => (
  <div className="center">
    <h1 className="title-large-pink">Dee</h1>
    <h1 className="title-large-blue blinking">Explains it All</h1>
    <br/>
    <br/>
    <img src={`${S3_URL}/fun/dee.gif`}/>
  </div>
);

export default Dee;
