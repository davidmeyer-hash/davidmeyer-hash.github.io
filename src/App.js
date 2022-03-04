import './App.css';
import {
  Route,
  HashRouter,
  Link,
  useParams,
} from "react-router-dom";
import {useState} from 'react'

function App() {
return (
  <HashRouter basename="/">
            
           <Route exact path={`/`}>
            <Home />
          </Route>    
          <Route path={`/person/:name`}>
            <Person />
          </Route>
          <Route path={`/screener/:name`}>
           <Screener /> 
          </Route>

         <Route path={`/vax/:name`}>
           <Vax/> 
          </Route>
           <Route exact path={`/create`}>
            <Create/>
          </Route>    

  </HashRouter>
)
}

function Create() {
  const [input, setInput] = useState('')
  const onInput = e => setInput(e.target.value)
  return (
    <div>
      <h1>Create passes:</h1>
      <input value={input} onChange={onInput} placeholder={"name"} />
      <Link to={"/person/"+input}>create</Link>
    </div>
  )
}

function Home(){
  return (
          <p>david</p> 
  )
}

function Person () {
  let {name }= useParams();
  return (
    <div>
      <h1>{name}'s passes:</h1>
      <li><Link to={"/screener/"+name}>screener</Link></li>
      <li><Link to={"/vax/"+name}>vax</Link></li>

    </div>
  )
}

function Screener () {
  let {name }= useParams();
  name = name.split('_').join(' ')
  const time = new Date(); 
  const month = time.toLocaleString('default', {month: 'long'}).substring(0, 3);
  const date = time.getDate();
  const year = time.getFullYear(); 
  return (
    <div><div class="aHl"></div><div id=":2yy" tabindex="-1"></div><div id=":2zq" class="ii gt"><div id=":2zp" class="a3s aiL msg1529773300159626967"><div class="adM">

    </div><div><table role="presentation" width="100%">
      <tbody>
        <tr>
          <td>
          <table role="presentation" style={{"maxWidth":"550px","margin":"0 auto", 'cellspacing':'0',"fontFamily":"'Gotham SSm A','Gotham SSm B',Helvetica,Arial,sans-serif","border":"none","borderCollapse":"collaps"}}>
            <tbody >
              <div style={{background:"#28811e"}}>
              <tr style={{background:"#28811e"}}>
                <td style={{"margin":"0","textAlign":"center","padding":"1rem 0"}}  valign="middle">
                <h1 style={{"fontWeight":"bold","fontSize":"1rem","lineHeight":"1.5rem","color":"#fff","textTransform":"uppercase","margin":"0"}}>Screener Status:<br/>
                <span style={{"fontSize":"4rem","lineHeight":"4rem"}}>Pass</span></h1>
                </td>
                <td style={{"padding":"1rem 0"}} width="50%" valign="bottom">
                <p style={{"color":"#fff","fontSize":".9rem"}}>For access to NYU buildings, you must also be approved to be on campus and comply with all health and safety protocols.</p>
                </td>
              </tr>
              </div>

              <tr>
                <td colspan="2" style={{"padding":"1rem"}} valign="middle">
                <p style={{"fontWeight":"bold","fontSize":"1.5rem","lineHeight":"100%","margin":"0","paddingBottom":".5rem","textAlign":"center"}}>{name}</p>
    
                <p style={{"fontWeight":"bold","fontSize":"1.5rem","lineHeight":"100%","margin":"0","textAlign":"center"}} valign="middle">{`${date} ${month} ${year}`}</p>
                </td>
              </tr>
            </tbody>
          </table>
          </td>
        </tr>
      </tbody>
    </table>
    
    <table role="presentation" width="100%">
      <tbody>
        <tr>
          <td>
          <table role="presentation" style={{"maxWidth":"550px","margin":"0 auto","fontFamily":"'Gotham SSm A','Gotham SSm B',Helvetica,Arial,sans-serif","color":"#33"}}>
            <tbody>
              <tr>
                <td style={{"padding-bottom":"20px"}}>
                <p style={{"padding-top":"15px"}}><strong style={{"text-transform":"uppercase"}}>Remember</strong></p>
    
                <ul>
                  <li>You need to show this screen result to a Campus Safety Officer at the building entrance</li>
                  <li>You must always wear a face covering over your nose and mouth while on NYU property unless otherwise provided under University guidelines</li>
                  <li>Maintain a distance of 6 ft (2m) from others</li>
                  <li>Wash your hands with soap and water or use alcohol-based hand sanitizer before and after touching public surfaces and items</li>
                </ul>
    
                <p><strong style={{"text-transform":"uppercase"}}>If You Start To Feel Sick</strong></p>
    
                <ol>
                  <li>Immediately find a place away from others.</li>
                  <li>Complete the <a href="https://www.nyu.edu/coronavirus/reporting" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.nyu.edu/coronavirus/reporting&amp;source=gmail&amp;ust=1630619060027000&amp;usg=AFQjCNE-Dv4spvKZiAdhz_JmXDa0FPJXQw">COVID-19 Reporting Form</a> to notify the NYU COVID-19 Prevention &amp; Response Team.</li>
                  <li>Go home promptly.
                  <ul>
                    <li>If you are a faculty member or employee, alert your department chair or supervisor that you will be going home sick. You are not required to disclose any details about your medical history or experiences.</li>
                    <li>If you live in an NYU Residence Hall or NYU apartment, you should stay in your room. If you share common spaces with other people, wear your face covering and separate yourself as much as possible. The NYU COVID-19 Prevention &amp; Response Team will contact you between the hours of 9:00 a.m.–9:00 p.m.</li>
                  </ul>
                  </li>
                  <li>If you need medical care or additional health guidance, contact the Student Health Center (students) or your personal medical provider (faculty and employees).</li>
                </ol>
    
                <p><em>The NYU Daily COVID-19 Screener for Campus Access is not intended to take the place of consultation with your medical provider or for the diagnosis or treatment of disease or other conditions. If you're in an emergency medical situation, please call 911 or your local emergency number.</em></p>
                </td>
              </tr>
            </tbody>
          </table>
          </td>
        </tr>
      </tbody>
    </table><div class="yj6qo"></div><div class="adL">
    </div></div></div></div><div id=":2yv" class="ii gt" style={{"display":"none"}}><div id=":2yu" class="a3s aiL "></div></div><div class="hi"></div></div>
  )
}


function Vax () {
  let {name }= useParams();
  name = name.split('_').join(' ')
  const time = new Date(); 
  const month = time.toLocaleString('default', {month: 'long'}).substring(0, 3);
  const date = time.getDate();
  const year = time.getFullYear(); 
  return (
    <div><div class="aHl"></div><div id=":2yy" tabindex="-1"></div><div id=":2zq" class="ii gt"><div id=":2zp" class="a3s aiL msg1529773300159626967"><div class="adM">

    </div><div><table role="presentation" width="100%" /*style={{"background":"#57068c"}}*/ >
      <tbody>
        <tr>
          <td>
          <table role="presentation" style={{"maxWidth":"550px","margin":"0 auto", 'cellspacing':'0',"fontFamily":"'Gotham SSm A','Gotham SSm B',Helvetica,Arial,sans-serif","border":"none","borderCollapse":"collaps"}}>
            <tbody >
              <div>
              <tr>
               <td style={{"background":"#57068c"}}>
			<table role="presentation" style={{"maxWidth":"550px", width:'390px',"margin":"0 auto","fontFamily":"'Gotham SSm A','Gotham SSm B',Helvetica,Arial,sans-serif","border":"none","borderCollapse":"collapse","color":"#fff"}}>
				<tbody>
					<tr style={{"background":"#57068c"}}>
						<td style={{"margin":"0","textAlign":"center","padding":"1rem 0 0 0"}} valign="middle">
						<h1 style={{"fontWeight":"bold","fontSize":"4rem","lineHeight":"4rem","textTransform":"uppercase","margin":"0"}}>Vax Pass</h1>
						</td>
					</tr>
					<tr>
						<td colspan={4} style={{"padding":"1rem 0"}} valign="middle">
						<p style={{"fontWeight":"bold","fontSize":"1.5rem","lineHeight":"100%","margin":"0","paddingBottom":".5rem","textAlign":"center"}}>{name}</p>

						<p style={{"fontWeight":"bold","fontSize":"1.5rem","lineHeight":"100%","margin":"0","textAlign":"center"}} valign="middle">{`${date} ${month} ${year}`}</p>
						</td>
					</tr>
				</tbody>
			</table>
			</td> 
              </tr>
              </div>


            </tbody>
          </table>
          </td>
        </tr>
      </tbody>
    </table>
    
    <table role="presentation" width="100%">
      <tbody>
        <tr>
          <td>
          <table role="presentation" style={{"maxWidth":"550px","margin":"0 auto","fontFamily":"'Gotham SSm A','Gotham SSm B',Helvetica,Arial,sans-serif","color":"#33"}}>
            <tbody>
              <tr>
                <td style={{"padding-bottom":"20px"}}>
                <p style={{"padding-top":"15px"}}>You must comply with all health and safety protocols while in NYU buildings and participating in NYU-sponsored activities on or off campus.</p>

                <p style={{"padding-top":"15px"}}><strong style={{"text-transform":"uppercase"}}>Remember</strong></p>
    
                <ul>
                  <li>You need to show this screen result to a Campus Safety Officer at the building entrance</li>
                  <li>You must always wear a face covering over your nose and mouth while on NYU property unless otherwise provided under University guidelines</li>
                  <li>Maintain a distance of 6 ft (2m) from others</li>
                  <li>Wash your hands with soap and water or use alcohol-based hand sanitizer before and after touching public surfaces and items</li>
                  <li>This pass will only be valid for today, 28 Feb 2022.</li>

                </ul>
    
                </td>
              </tr>
            </tbody>
          </table>
          </td>
        </tr>
      </tbody>
    </table><div class="yj6qo"></div><div class="adL">
    </div></div></div></div><div id=":2yv" class="ii gt" style={{"display":"none"}}><div id=":2yu" class="a3s aiL "></div></div><div class="hi"></div></div>
  )
}
export default App;






