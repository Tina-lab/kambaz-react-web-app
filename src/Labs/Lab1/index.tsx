export default function Lab1() {
  return (
    <div id="wd-lab1">
      <h2>Lab 1</h2>
      <h3> Full Name: Yuqing Huang</h3>
      <h3> Section:01</h3>
      <h3>HTML Examples</h3>
      <div id="wd-h-tag">
        <h4>Heading Tags</h4>
        Text documents are often broken up into several sections and
        subsections. Each section is usually prefaced with a short title or
        heading that attempts to summarize the topic of the section it precedes.
        For instance this paragraph is preceded by the heading Heading Tags. The
        font of the section headings are usually larger and bolder than their
        subsection headings. This document uses headings to introduce topics
        such as HTML Documents, HTML Tags, Heading Tags, etc. HTML heading tags
        can be used to format plain text so that it renders in a browser as
        large headings. There are 6 heading tags for different sizes: h1, h2,
        h3, h4, h5, and h6. Tag h1 is the largest heading and h6 is the smallest
        heading.
      </div>
      <div id="wd-p-tag">
        <h4>Paragraph Tag</h4>
        <p id="wd-p-1">
          This is a paragraph. We often separate a long set of sentences with
          vertical spaces to make the text easier to read. Browsers ignore
          vertical white spaces and render all the text as one single set of
          sentences. To force the browser to add vertical spacing, wrap the
          paragraphs you want to separate with the paragraph tag
        </p>
        <p id="wd-p-2">
          This is the first paragraph. The paragraph tag is used to format
          vertical gaps between long pieces of text like this one.
        </p>
        <p id="wd-p-2">
          This is the second paragraph. Even though there is a deliberate white
          gap between the paragraph above and this paragraph, by default
          browsers render them as one contiguous piece of text as shown here on
          the right.
        </p>
        <p>
          This is the third paragraph. Wrap each paragraph with the paragraph
          tag to tell browsers to render the gaps.
        </p>
      </div>
      <div id="wd-lists">
        <h4>List Tags</h4>
        <h5>Ordered List Tag</h5>
        How to make pancakes:
        <ol id="wd-pancakes">
          <li>Mix dry ingredients.</li>
          <li>Add wet ingredients. </li>
          <li>Stir to combine. </li>
          <li>Heat a skillet or griddle.</li>
          <li>Pour batter onto the skillet.</li>
          <li>Cook until bubbly on top.</li>
          <li>Flip and cook the other side.</li>
          <li>Serve and enjoy!</li>
        </ol>
        How to make cabbage egg soup?
        <ol id="wd-your-favorite-recipe">
          <li>Fried two eggs with oil.</li>
          <li>Wash the cabbages.</li>
          <li>put hot water into the pot, let it boil with the eggs.</li>
          <li>put cabbages and enjoy!</li>
        </ol>
        <h5>Unordered List Tag</h5>
        My favorite books (in no particular order)
        <ul id="wd-my-books">
          <li>Dune</li>
          <li>Lord of the Rings</li>
          <li>Ender's Game</li>
          <li>Red Mars</li>
          <li>The Forever War</li>
        </ul>
        Your favorite books (in no particular order)
        <ul id="wd-your-books">
          <li>Pride and Prejudice</li>
          <li>Developing Full Stack MERN Web Application</li>
          <li>The Great Gatsby</li>
        </ul>
      </div>
      <div id="wd-tables">
        <h4>Table Tag</h4>
        <table border={1} width="100%">
          <thead>
            <tr>
              <th>Quiz</th>
              <th>Topic</th>
              <th>Date</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Q1</td>
              <td>HTML</td>
              <td>2/3/21</td>
              <td>85</td>
            </tr>
            <tr>
              <td>Q2</td>
              <td>CSS</td>
              <td>2/10/21</td>
              <td>90</td>
            </tr>
            <tr>
              <td>Q3</td>
              <td>JavaScript</td>
              <td>2/17/21</td>
              <td>95</td>
            </tr>
            <tr>
              <td>Q4</td>
              <td>React</td>
              <td>2/20/21</td>
              <td>99</td>
            </tr>
            <tr>
              <td>Q5</td>
              <td>Vue</td>
              <td>3/01/21</td>
              <td>99</td>
            </tr>
            <tr>
              <td>Q6</td>
              <td>Angular</td>
              <td>3/15/21</td>
              <td>95</td>
            </tr>
            <tr>
              <td>Q7</td>
              <td>MongoDB</td>
              <td>3/25/21</td>
              <td>92</td>
            </tr>
            <tr>
              <td>Q8</td>
              <td>NodeJS</td>
              <td>4/01/21</td>
              <td>97</td>
            </tr>
            <tr>
              <td>Q9</td>
              <td>Django</td>
              <td>4/04/21</td>
              <td>92</td>
            </tr>
            <tr>
              <td>Q10</td>
              <td>Flask</td>
              <td>4/15/21</td>
              <td>99</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>Average</td>
              <td>90</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div id="wd-images">
        <h4>Image tag</h4>
        Loading an image from the internet: <br />
        <img
          id="wd-starship"
          width="400px"
          src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1
_Starship-gap2.jpg"
        />
        <br />
        Loading a local image:
        <br />
        <img id="wd-teslabot" src="images/teslabot.jpg" height="200px" />
      </div>
      <div id="wd-forms">
        <h4>Form Elements</h4>
        <form id="wd-text-fields">
          <h5>Text Fields</h5>
          <label htmlFor="wd-text-fields-username">Username:</label>
          <input placeholder="jdoe" id="wd-text-fields-username" /> <br />
          <label htmlFor="wd-text-fields-password">Password:</label>
          <input
            type="password"
            value="123@#$asd"
            id="wd-text-fields-password"
          />
          <br />
          <label htmlFor="wd-text-fields-first-name">First name:</label>
          <input type="text" title="John" id="wd-text-fields-first-name" />{" "}
          <br />
          <label htmlFor="wd-text-fields-last-name">Last name:</label>
          <input
            type="text"
            placeholder="Doe"
            value="Wonderland"
            title="The last name"
            id="wd-text-fields-last-name"
          />
          <h5>Text boxes</h5>
          <label>Biography:</label>
          <br />
          <textarea id="wd-textarea" cols={30} rows={10}>
            Donec urna odio, viverra at luctus eu, sodales non augue. Nam id
            nisl viverra, tincidunt ligula ut, blandit neque. Integer aliquam
            vulputate libero, vel lacinia diam cursus sed. Integer augue elit,
            pharetra ut est quis, condimentum porttitor metus. Pellentesque
            rhoncus tincidunt ipsum, et varius augue pretium sed. Aenean
            efficitur vitae nunc vel dictum. Aliquam pulvinar rhoncus rutrum.
            Cras scelerisque felis ut porta consectetur. Suspendisse vehicula,
            ipsum ac consequat sagittis, dolor purus dignissim nibh, nec
            imperdiet urna nisl id lacus. Vestibulum tortor enim, consectetur
            tempus risus ut, consectetur iaculis felis. Curabitur pretium lectus
            et euismod varius. Nam congue, mauris sed bibendum pulvinar, justo
            orci posuere tortor, id vehicula ligula est maximus risus. Cras at
            imperdiet ante. Pellentesque at congue tortor. Proin tempus at massa
            eu sodales. Proin porttitor risus quis diam viverra faucibus.
            Aliquam ligula metus, commodo eget purus sed, mollis ornare nunc.
            Nullam auctor tristique arcu ut auctor. Duis volutpat erat eget
            metus dictum molestie. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Quisque euismod blandit blandit. Nullam dolor
            est, sagittis eget lacinia eu, lacinia nec metus. Duis eleifend,
            arcu fringilla porta congue, lacus libero tristique risus, id
            pellentesque nisi est ut sem. Ut eget eleifend dui, elementum
            iaculis felis. Etiam metus nulla, tempus in nunc nec, vestibulum
            tempor neque. Donec vulputate iaculis felis, id aliquet felis
            efficitur vel.
          </textarea>
          <h5 id="wd-buttons">Buttons</h5>
          <button
            type="button"
            onClick={() => alert("Life is Good!")}
            id="wd-all-good"
          >
            Hello World!
          </button>
          <h5 id="wd-radio-buttons">Radio buttons</h5>
          <label>Favorite movie genre:</label>
          <br />
          <input type="radio" name="radio-genre" id="wd-radio-comedy" />
          <label htmlFor="wd-radio-comedy">Comedy</label>
          <br />
          <input type="radio" name="radio-genre" id="wd-radio-drama" />
          <label htmlFor="wd-radio-drama">Drama</label>
          <br />
          <input type="radio" name="radio-genre" id="wd-radio-scifi" />
          <label htmlFor="wd-radio-scifi">Science Fiction</label>
          <br />
          <input type="radio" name="radio-genre" id="wd-radio-fantasy" />
          <label htmlFor="wd-radio-fantasy">Fantasy</label>
          <h5 id="wd-checkboxes">Checkboxes</h5>
          <label>Favorite movie genre:</label>
          <br />
          <input type="checkbox" name="check-genre" id="wd-chkbox-comedy" />
          <label htmlFor="wd-chkbox-comedy">Comedy</label>
          <br />
          <input type="checkbox" name="check-genre" id="wd-chkbox-drama" />
          <label htmlFor="wd-chkbox-drama">Drama</label>
          <br />
          <input type="checkbox" name="check-genre" id="wd-chkbox-scifi" />
          <label htmlFor="wd-chkbox-scifi">Science Fiction</label>
          <br />
          <input type="checkbox" name="check-genre" id="wd-chkbox-fantasy" />
          <label htmlFor="wd-chkbox-fantasy">Fantasy</label>
          <h4 id="wd-dropdowns">Dropdowns</h4>
          <h5>Select one</h5>
          <label htmlFor="wd-select-one-genre"> Favorite movie genre: </label>
          <br />
          <select id="wd-select-one-genre">
            <option value="COMEDY">Comedy</option>
            <option value="DRAMA">Drama</option>
            <option selected value="SCIFI">
              Science Fiction
            </option>
            <option value="FANTASY">Fantasy</option>
          </select>
          <h5>Select many</h5>
          <label htmlFor="wd-select-many-genre"> Favorite movie genres: </label>
          <br />
          <select multiple id="wd-select-many-genre">
            <option selected value="COMEDY">
              Comedy
            </option>
            <option value="DRAMA">Drama</option>
            <option selected value="SCIFI">
              Science Fiction
            </option>
            <option value="FANTASY">Fantasy</option>
          </select>
          <h4>Other HTML field types</h4>
          <label htmlFor="wd-text-fields-email"> Email: </label>
          <input
            type="email"
            placeholder="jdoe@somewhere.com"
            id="wd-text-fields-email"
          />
          <br />
          <label htmlFor="wd-text-fields-salary-start"> Starting salary:</label>
          <input
            type="number"
            value="100000"
            placeholder="1000"
            id="wd-text-fields-salary-start"
          />
          <br />
          <label htmlFor="wd-text-fields-rating"> Rating: </label>
          <input
            type="range"
            value="4"
            max="5"
            placeholder="Doe"
            id="wd-text-fields-rating"
          />
          <br />
          <label htmlFor="wd-text-fields-dob"> Date of birth: </label>
          <input type="date" value="2000-01-21" id="wd-text-fields-dob" />
          <br />
        </form>
      </div>
      <h4>Anchor tag</h4>
      Please
      <a href="https://www.lipsum.com" id="wd-lipsum">
        click here
      </a>
      to get dummy text <br />
      Please
      <a href="https://github.com/Tina-lab/kambaz-react-web-app" id="wd-github">
        click here
      </a>
      to the main page of my GitHub repository.
      <br />
    </div>
  );
}
